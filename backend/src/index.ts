import * as dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { PORT } from "../config";
import { BookResolver } from "./modules/book/BookResolver";
import { RegisterResolver } from "./modules/user/RegisterResolver";

async function main() {
  await createConnection();
  const schema = await buildSchema({ resolvers: [BookResolver, RegisterResolver] });
  const server = new ApolloServer({ schema });
  await server.listen(PORT);
  console.log(`http://localhost:${PORT} 🚀`);
}

main();
