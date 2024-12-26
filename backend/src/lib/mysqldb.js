import mysql from "mysql2/promise"

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
})

export async function query({ query, values = [] }) {
  const connection = await pool.getConnection()
  try {
    const [results] = await connection.execute(query, values)
    return results
  } catch (error) {
    throw new Error(error.message)
  } finally {
    connection.release()
  }
}
