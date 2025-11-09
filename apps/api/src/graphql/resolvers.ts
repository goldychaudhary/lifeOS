import { Resolvers } from "../generated/graphql";
import { prisma } from "../lib/prisma";

export const resolvers: Resolvers = {
  Query: {
    hello: () => "Hello from LifeOS backend!",

    users: async () => {
      const users = await prisma.user.findMany();
      return users.map((user) => ({
        id: String(user.id),
        name: user.name,
        email: user.email,
        createdAt: user.createdAt.toISOString(),
      }));
    },
  },

  Mutation: {
    createUser: async (_parent, args, ctx) => {
      const newUser = await ctx.prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
        },
      });

      return {
        id: String(newUser.id),
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt.toISOString(),
      };
    },
  },
};
