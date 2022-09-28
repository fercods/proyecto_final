const mongoose = require('mongoose')
const Schema = mongoose.Schema
const proveedorSchema = new Schema ({
    nombre: String,
    telefono:Number
}, {versionKey:false})
module.exports = mongoose.model('proveedores', proveedorSchema)
