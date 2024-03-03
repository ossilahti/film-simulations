/* eslint-disable no-console */

// eslint-disable-next-line unicorn/prefer-node-protocol
import path from 'path'
import pg from 'pg'
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

const { Pool } = pg
const app = express()
app.use(cors())
const port = 3333

function configDotenv() {
  // Resolve the absolute path to the .env file
  const envPath = path.resolve('~/.env')

  // Load environment variables from the resolved path
  dotenv.config({ path: envPath })
}

// Call the function to configure dotenv
function fetchData() {
  configDotenv()

  const pool = new Pool({
    host: '',
    user: '',
    port: 5750,
    password: '',
    database: '',
  })

  app.get('/x-trans/i', async (req, res) => {
    try {
      console.log(`Received request: ${req.method} ${req.url}`)
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM "RECIPES"')
      res.json(result.rows)
      client.release()
    }
    catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  })

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
  })
}

export { fetchData }
