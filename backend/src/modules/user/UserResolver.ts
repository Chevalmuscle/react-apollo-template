import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import { AuthenticationError } from "apollo-server";
import bcrypt from "bcryptjs";

import { User } from "../../models/User";
import { AuthResponse } from "../../models/AuthResponse";

import { RegisterInput } from "./RegisterInput";
import { LoginInput } from "./LoginInput";
import { UpdateUserInput } from "./UpdateUserInput";

import { getToken } from "../../utils";
import { Context } from "../../Context";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users() {
    return User.find();
  }

  @Query(() => User)
  async user(@Arg("id") id: number) {
    const user = User.findOne({ where: { id } });
    if (!user) throw new Error("User not found!");
    return user;
  }

  @Mutation(() => User)
  async register(
    @Arg("data")
    { email, firstName, lastName, password }: RegisterInput,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();

    return user;
  }

  @Mutation(() => AuthResponse, { nullable: true })
  async login(
    @Arg("data")
    { email, password }: LoginInput,
  ): Promise<Partial<AuthResponse>> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new AuthenticationError("this user is not found!");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new AuthenticationError("must authenticate");
    }

    const token = getToken(user);

    return { token, ...user };
  }

  @Mutation(() => User)
  async updateUser(@Arg("id") id: number, @Arg("data") data: UpdateUserInput, @Ctx() context: Context) {
    if (context?.user?.id !== id) {
      throw new Error("Must be authenticated and users can only update themselves");
    }

    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error("User not found!");
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }
    Object.assign(user, data);
    await user.save();
    return user;
  }
}
