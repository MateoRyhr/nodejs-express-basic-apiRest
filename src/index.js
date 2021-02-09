const express = require('express')
const morgan = require('morgan')//es un middleware: funcion que procesa datos antes de que nuestro servidor los reciba
const app = express()

// settings
// process.env.port --> en caso de que exista una variable de entorno global puerto. 
app.set('port',process.env.PORT || 3300)
app.set('json spaces',2)//mejora la visualizacion del json

// middleware
app.use(morgan('dev'))//morgan nos permite ver por consola las peticiones que llegan al servidor
app.use(express.json())//le permite a mi servidor recibir formatos json y entenderlos
app.use(express.urlencoded({extended: false}))//para poder recibir datos de formularios, datos livianos de inputs

// routes
app.use(require('./routes/index.js'))
app.use('/api/movies',require('./routes/movies.js'))
app.use('/api/users',require('./routes/users.js'))


// starting server
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`)
})