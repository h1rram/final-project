import express from "express"
import { getUser, newUser } from "../controllers/UsersController.js"
const router = express.Router()

router.post('/login', async (req, res) => {
    const user = await getUser(req.body.username, req.body.password)
    if (!user) return res.json({"message": "Invalid credentials"})
    res.sendStatus(200)
})

router.post('/register', async (req, res) => {
    await newUser(req.body.username, req.body.email, req.body.password)
    res.sendStatus(201)
})

export default router