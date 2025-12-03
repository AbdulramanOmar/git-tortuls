const express = require("express")
const router = express.Router()
const { authveriy, authRoles } = require("../middleware/auth.middleware")
const {getProducts, getsellerProducts, createProduct, getUsers} = require("../controllers/products.controller")

router.get("/", getProducts)
router.get("/seller",authveriy, authRoles("seller"), getsellerProducts)
router.post("/", authveriy, authRoles("seller"), createProduct)
router.get("/users", getUsers)

module.exports = router