import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

import db from '../db'

export default refs => new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    viewer: {
      type: GraphQLString,
      resolve: () => 'hihi'
    },
    menu: {
      type: refs.menu,
      args: {
        id: {type: GraphQLString}
      },
      resolve: (root, args, rootValue) => {
        return db.menus(args.id)
      }
    },
    menus: {
      type: new GraphQLList(refs.menu),
      resolve: (root, args, rootValue) => {
        return db.menus()
      }
    },
    order: {
      type: refs.order,
      args: {
        id: {type: GraphQLString}
      },
      resolve: (root, args, rootValue) => {
        return db.orders(args.id)
      }
    },
    orders: {
      type: new GraphQLList(refs.order),
      resolve: () => {
        return db.orders()
      }
    }
  })
})
