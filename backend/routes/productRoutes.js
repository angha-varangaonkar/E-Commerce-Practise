const express = require('express')
const router = express.Router() ;

const productController = require('./../controllers/productController')
const upload = require('./../middleware/upload')
const protect = require('./../middleware/protect')
const admin = require('./../middleware/admin')

router.post('/addProduct', upload.single('image') , productController.createProduct)
router.get('/getproducts', productController.getProduct)
// router.put('/updateproduct',productController.upadeProduct)
module.exports = router