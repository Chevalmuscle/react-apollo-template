import { AuthenticationError } from "apollo-server";
import { Resolver, Mutation, Arg } from "type-graphql";
import bcrypt from "bcryptjs";
import { AuthResponse } from "../../models/AuthResponse";
import { User } from "../../models/User";
import { LoginInput } from "./LoginInput";
import { getToken } from "../../utils";

@Resolver()
export class LoginResolver {
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
}
