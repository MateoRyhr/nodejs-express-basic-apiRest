const { Router, response } = require('express')
const fetch = require('node-fetch')
const router = Router()

router.get('/', async (req,res) => {
    const userRes = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await userRes.json()
    res.json(users)
})

module.exports = router