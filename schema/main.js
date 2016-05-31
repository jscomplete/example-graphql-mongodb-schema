const graphql = require("graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
  GraphQLEnumType
} = graphql;

const queryType = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    usersCount: {
     description: "Total number of users in the database",
      type: GraphQLInt,
      resolve: (_, args, {db}) =>
        db.collection("users").count()
    }
  }
});

// const mutationType = new GraphQLObjectType({
//   name: "RootMutation",
//   fields: {
//   }
// });
//
const mySchema = new GraphQLSchema({
  query: queryType,
  // mutation: mutationType
});

module.exports = mySchema;
