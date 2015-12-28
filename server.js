import Koa from 'koa'
import schema from './schema'
import { graphql } from 'graphql'

const app = new Koa()

app.use(async (context, next) => {
  let query = `{menus {name, price}}`
  if (context.path === '/graphql') {
    context.body = JSON.stringify(await graphql(schema, query), null, 2)
  }
  await next()
})

app.listen(3000)
console.log('Daemon is listening dread voice at port 3000')
