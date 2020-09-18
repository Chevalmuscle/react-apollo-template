import * as dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { PORT } from "../config";
import { BookResolver } from "./modules/book/BookResolver";
import { UserResolver } from "./modules/user/UserResolver";

import { getUserFromToken } from "./utils";

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers: [BookResolver, UserResolver] });
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const token = req.headers.authorization || "";
      return { user: getUserFromToken(token) };
    },
  });

  await server.listen(PORT);
  console.log(`http://localhost:${PORT}/graphql 🚀`);
}

main();
