import { Entity } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { User } from "./User";

@ObjectType()
@Entity()
export class AuthResponse extends User {
  @Field()
  token: string;
}
