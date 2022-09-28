# CRUD PROVEEDORES 

Es un crud que guarda contactos de proveedores de suministro de materias primas.  
Permite agregar los nombres, telefonos y tambien editar, eliminar y mostrar una lista completa de todos los contactos.  
Se utilizo el modelo vista controlador, plantillas ejs bootstrap 5.  
Se conecta a la base de datos mongodb con mongoose.

## Requerimientos

Se debe tener instalado node js, mongodb compass.

**Base de datos:** Se debe crear una bd con nombre dbproveedores con una coleccion con nombre proveedores.  
En la bd se veran los documentos de la app cuando se realicen operaciones de agregar editar o eliminar contactos.  
De igual forma se podrán realizar operaciones desde la bd cuyo resultado se visualizara en la app.

## Funcionamiento 

 **Boton Nuevo proveedor:**  Agrega un nuevo proveedor y lo muestra con todos los registros ya existentes.  
 **Boton Editar:** Abre una ventana modal con boostrap 5, captura los datos de la tabla y realiza las modificaciones.  
 **Boton Eliminar:** Captura el id de la tabla y lo elimina
 
##  Ejecucion
 
Con la instrucion **nodemon app** la app se conectara a la base de datos y se ejecutara en el puerto 3000.  
Servidor en http://localhost:3000  
Conectado a MongoDB