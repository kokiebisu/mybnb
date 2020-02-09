const resolvers = {
  Query: {
    getStays(root, args, context) {
      return context.prisma.stays();
    },
    getStay(root, args, context) {
      return context.prisma.stay({ title: args.title });
    }
  },
  Mutation: {
    createStay(root, args, context) {
      return context.prisma.createStay({
        title: args.title,
        cost: args.cost,
        hostType: args.hostType,
        country: args.country
      });
    }
  }
};

module.exports = resolvers;