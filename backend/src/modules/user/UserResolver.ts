import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../models/User";
import { UpdateUserInput } from "./UpdateUserInput";
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
