const express = require('express')
const router = express.Router()

const proveedorController = require('../controllers/proveedorController')

//Mostrar todos los proveedores (GET)
router.get('/', proveedorController.mostrar)
//Crear proveedor (POST)
router.post('/crear', proveedorController.crear)
//Editar proveedor (POST)
router.post('/editar', proveedorController.editar)
//Borrar proveedor (GET)
router.get('/borrar/:id', proveedorController.borrar)
module.exports = router