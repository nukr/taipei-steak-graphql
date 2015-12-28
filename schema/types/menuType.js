import {
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType
} from 'graphql'

export default refs => new GraphQLObjectType({
  name: 'Menu',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    price: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    }
  })
})
