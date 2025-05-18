import db from '../database/db.js'

async function getUser(username, password) {
    const [user] = await db.query(`SELECT * FROM users WHERE username = ? & password = ?`, [username, password])
    return user
}

async function newUser(username, email, password) {
    await db.query(`INSERT INTO users (username, email, password) VALUES (?, ?, ?)`, [username, email, password])
}

export { getUser, newUser }