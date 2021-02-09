const { Router } = require('express')
const router = Router()//el metodo router nos permite definir nuevas rutas para el servidor

router.get('/api/',(req,res) => {
    const data = {
        "name": "Mateo",
        "surname": "Ryhr",
        "github": "https://github.com/MateoRyhr",
    }
    res.json(data)

})

module.exports = router