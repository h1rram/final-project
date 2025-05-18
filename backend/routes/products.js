import express from "express"
import { deleteProduct, getProduct, getProducts, newProduct, updateProduct } from "../controllers/ProductsController.js"
const router = express.Router()

router.get('/products', async (req, res) => {
    res.send(await getProducts())
})
router.get('/products/:id', async (req, res) => {
    res.send(await getProduct(req.params.id))
})

router.post('/products', async (req, res) => {
    res.send(await newProduct(req.body.name, req.body.expDate, req.body.pPrice, req.body.sPrice))
})
router.put('/products/:id', async (req, res) => {
    res.send(await updateProduct(req.body.name, req.body.expDate, req.body.pPrice, req.body.sPrice))
})
router.delete('/products/:id', async (req, res) => {
    res.send(await deleteProduct(req.params.id))
})

export default router