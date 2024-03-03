/* eslint-disable no-console, node/prefer-global/process */

import * as pg from 'pg'
import 'dotenv/config'

const client = new pg.Client({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USERNAME,
  port: 5750,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
})

client.connect()

client.query('Select * from "RECIPES"', (err, res) => {
  if (!err)
    console.log(res.rows)
  else
    console.log(err.message)
  client.end()
})
