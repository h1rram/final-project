import db from '../database/db.js'

async function getProducts() {
    const [products] = await db.query(`SELECT * FROM products`)
    return products
}

async function getProduct(id) {
    const [product] = await db.query(`SELECT * FROM products WHERE id = ?`, [id])
    return product
}

async function newProduct(name, expDate, pPrice, sPrice) {
    await db.query(`INSERT INTO products(name, expDate, pPrice, sPrice) VALUES(?, ?, ?, ?)`, [name, expDate, pPrice, sPrice])
    return({"message": "New product added"})
}

async function updateProduct(name, expDate, pPrice, sPrice, id) {
    await db.query(`UPDATE products SET name = ?, expDate = ?, pPrice = ?, sPrice = ? WHERE id = ?`, [name, expDate, pPrice, sPrice, id])
    return({"message": "Product updated"})
}

async function deleteProduct(id) {
    await db.query(`DELETE FROM products WHERE id = ?`, [id])
    return({"message": "Product deleted"})
}

export { getProducts, getProduct, newProduct, updateProduct, deleteProduct }
