import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

export default refs => new GraphQLObjectType({
  name: 'Order',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    items: {
      type: new GraphQLList(refs.menu)
    },
    createdAt: {
      type: GraphQLString
    }
  })
})
