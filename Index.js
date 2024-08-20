import express from 'express'
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'
//crear app
const app = express()
const port = process.env.PORT || 3000;

//habilitar lectura de datos del formulario
app.use(express.urlencoded({extended:true}))


//conexion a la base de datos 
try{
    await db.authenticate();
    db.sync()
    console.log('conexion correcta')
}catch(error){
    console.log(error)
}
//habilitar pug 

app.set('view engine', 'pug')
app.set('views', './views')


//carpeta publica

app.use(express.static('public'))




//routing

app.use('/auth', usuarioRoutes)                                     

//definir el port y arrancar el proyecto
app.listen(port, ()=>{
    console.log(`el servidor esta funcionando en el puerto ${port}`)
});