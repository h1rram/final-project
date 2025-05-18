import mysql from 'mysql2/promise'

const db = mysql.createPool({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: '',
    database: 'final_project',
})

db.getConnection().then(console.log("Database connected"))

export default db