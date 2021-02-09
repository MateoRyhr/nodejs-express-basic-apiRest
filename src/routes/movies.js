const { Router } = require('express')
const _ = require('underscore')
const fs = require('fs')
const router = Router()


const movies = require('../sample.json')
console.log(movies)

router.get('/',(req,res) => {
    res.json(movies)
})

router.post('/',(req,res) => {
    //recibimos la data por el req.body
    //res.send(title)// responde con un string
    const { title, director, year, raiting } = req.body

    if(title && director && year && raiting){
        const id = movies.length + 1
        const newMovie = { id, ...req.body}
        movies.push(newMovie)
        res.json(movies)
    } else{
        res.status(500).json({error: 'There was an error.'})
    }
})

router.put('/:id',(req,res) => {
    const {id} = req.params
    const { title, director, year, raiting } = req.body
    if(title && director && year && raiting){
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title
                movie.director = director
                movie.year = year
                movie.raiting = raiting
            }
        })
        res.json(movies)
    }else {
        res.status(500).json({error: 'There was an error'})
    }
    
})

router.delete('/:id',(req,res) => {
    //req.params, devuelve los parametros, se establecen con los dos puntos :
    console.log(req.params)
    const { id } = req.params
    _.each(movies, (movie, i) => {
        if(movie.id == id){
            console.log('Entro al if')
            movies.splice(i,1)
        }
    })
    res.send(movies)
})

module.exports = router