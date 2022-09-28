const Proveedor = require('../model/Proveedor')

//Mostrar
module.exports.mostrar = (req, res)=>{
    Proveedor.find({}, (error, proveedores)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los proveedores'
            })
        }
        return res.render('index', {proveedores: proveedores})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    const proveedor = new Proveedor({
        nombre: req.body.nombre,
        telefono: req.body.telefono
    })
    proveedor.save(function(error,proveedor){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el proveedor'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const telefono = req.body.telefono_editar
    Proveedor.findByIdAndUpdate(id, {nombre, telefono}, (error, proveedor)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el proveedor'
            })
        }
        res.redirect('/')
    })
}

//Eliminar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Proveedor.findByIdAndRemove(id, (error, proveedor)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el proveedor'
            })
        }
        res.redirect('/')
    })
}