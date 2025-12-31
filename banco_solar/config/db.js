import pg from 'pg'
import 'dotenv/config';
const { Pool } = pg

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

const config = { 
    user: DB_USER, 
    host: DB_HOST, 
    port: DB_PORT, 
    password: DB_PASSWORD, 
    database: DB_DATABASE,
    allowExitOnIdle: true

}

const pool = new Pool(config)

export default pool