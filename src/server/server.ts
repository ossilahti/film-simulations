/* eslint-disable no-console */

import * as pg from 'pg'

const client = new pg.Client({
  host: 'localhost',
  user: 'postgres',
  port: 5750,
  password: 'ossi',
  database: 'film-simulations',
})

client.connect()

client.query('Select * from "RECIPES"', (err, res) => {
  if (!err)
    console.log(res.rows)
  else
    console.log(err.message)

  client.end()
})
