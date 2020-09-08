import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql"

/*  
   GraphQLSchema - Used to present all types of grapqh
   GraphQLSchema - Class that allows to create shema by passing graphql types
*/

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello from Query",
    },
  },
})

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello from mutation",
    },
  },
})

export const schema = new GraphQLSchema({ query, mutation })
