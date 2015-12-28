import 'babel-core/register'
import schema from '..'
import { graphql } from 'graphql'
import test from 'ava'

test('menus', async t => {
  let query = `{menus { id, name, price }}`
  let result = await graphql(schema, query)
  let expected = {
    data: {
      menus: [
        {
          id: '1',
          name: '牛小排',
          price: 100
        },
        {
          id: '2',
          name: '紅屋',
          price: 200
        }
      ]
    }
  }
  t.same(result, expected)
})

test('menu', async t => {
  let query = `{menu(id: "1") { id, name, price }}`
  let result = await graphql(schema, query)
  let expected = {
    data: {
      menu: {
        id: '1',
        name: '牛小排',
        price: 100
      }
    }
  }
  t.same(result, expected)
})
