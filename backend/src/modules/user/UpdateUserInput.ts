import { Length, IsEmail } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  @Length(1, 255)
  firstName?: string;

  @Field({ nullable: true })
  @Length(1, 255)
  lastName?: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsEmailAlreadyExist({ message: "email already in use" })
  email?: string;

  @Field({ nullable: true })
  password?: string;
}
