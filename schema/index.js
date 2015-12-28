import { GraphQLSchema } from 'graphql'
import * as types from './types'
import rootQuery from './rootQuery'
import rootMutation from './rootMutation'

const refCreators = {
  rootQuery,
  rootMutation,
  ...types
}

let refs = Object.keys(refCreators)
      .reduce((acc, key) => {
        acc[key] = refCreators[key](acc)
        return acc
      }, {})

export default new GraphQLSchema({
  query: refs.rootQuery,
  mutation: refs.rootMutation
})
