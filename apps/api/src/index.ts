import { ApolloServer } from "apollo-server";
import { readFileSync } from "fs";
import path from "path";
import { resolvers } from "./graphql/resolvers";
import { prisma } from "./lib/prisma";

// Load schema from .graphql file
const typeDefs = readFileSync(path.join(__dirname, "graphql/schema.graphql"), {
  encoding: "utf-8",
});

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
     context: () => ({ prisma }),
  });

  const { url } = await server.listen({ port: 4000 });
  console.log(`🚀 Server ready at ${url}`);
}

startServer();
