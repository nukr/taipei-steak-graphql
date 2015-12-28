import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

export default refs => new GraphQLObjectType({
  name: 'RootMutation',
  fields: () => ({
    viewer: {
      type: GraphQLString,
      resolve: () => 'hihi'
    }
  })
})
