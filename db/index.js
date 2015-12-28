let menus = [
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

let orders = [
  {
    id: '1',
    items: [{id: '1', name: '牛小排', price: 100}, {id: '2', name: '紅屋', price: 200}],
    createdAt: new Date()
  },
  {
    id: '2',
    items: [{name: '牛小排', price: 100}, {name: '紅屋', price: 200}],
    createdAt: new Date()
  }
]

let db = null

if (process.env.NODE_ENV === 'testing') {
  db = {
    menus: id => id ? menus.filter(menu => menu.id === id)[0] : menus,
    orders: id => id ? orders.filter(order => order.id === id)[0] : orders
  }
} else {
  const config = require('./config')
  const r = require('rethinkdbdash')(config.rethinkdb)
  db = {
    menus: id => id ? r.db('taipei_steak').table('menus') : r.db('taipei_steak').table('menus').get(id),
    orders: id => id ? r.db('taipei_steak').table('orders') : r.db('taipei_steak').table('orders').get(id)
  }
}

export default db
