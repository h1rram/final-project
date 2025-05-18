import express from 'express'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())

import users from './routes/users.js'
import products from './routes/products.js'

app.use(users)
app.use(products)

app.get('/', (req, res) => {
    res.send("Welcome!")
})

app.listen(3000, () => {
    console.log("Server running on port 3000...");
})