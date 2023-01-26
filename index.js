// const express = require('express')
import express from 'express'

const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))

const arrayUsuarios = [
    { id: '1', nombre: 'nombre 1', apellido: 'apellido 1', genero: 'F' },
    { id: '2', nombre: 'nombre 2', apellido: 'apellido 2', genero: 'F' },
    { id: '3', nombre: 'nombre 3', apellido: 'apellido 3', genero: 'M' },
    { id: '4', nombre: 'nombre 4', apellido: 'apellido 4', genero: 'F' },
    { id: '5', nombre: 'nombre 5', apellido: 'apellido 5', genero: 'M' },
    { id: '6', nombre: 'nombre 6', apellido: 'apellido 6', genero: 'M' },
    { id: '7', nombre: 'nombre 7', apellido: 'apellido 7', genero: 'F' },
    { id: '8', nombre: 'nombre 8', apellido: 'apellido 8', genero: 'M' }
]

app.get('/', (request, response) => {
    response.send(arrayUsuarios)
})
app.get('/api/:idUser', (request, response) => {
    const { idUser } = request.params
    const usuario = arrayUsuarios.find(user => user.id === idUser)
    if (!usuario) return response.send('No existe el usuario')
    response.send(usuario)
})

app.get('/saludo', (req, res) => {
    res.send('<h1 style="color: blue;">Hola saludos para todos, recuerden el nombre en zoom y valorar</h1>')
})
app.get('/usuario', (req, res) => {
    res.send({
        nombre: 'usuario',
        apellido: 'usuario',
        edad: 25,
        correo: 'f@gmail.com'
    })
})

app.get('/params/:nombre/:id', (req, res) => {
    console.log(req.params)
    const { nombre, id } = req.params
    res.send({
        nombre,
        id
    })
})

app.get('/query', (req, res) => {
    console.log(req.query)
    const { genero } = req.query
    if (!genero || (genero !== 'M' && genero !== 'F')) {
        return res.send({ arrayUsuarios })
    }

    let usariosFiltrados = arrayUsuarios.filter(user => user.genero === genero)

    res.send({
        usariosFiltrados
    })
})


app.listen(PORT, err => {
    if (err) console.log(err)
    console.log(`Escuchando en el puerto ${PORT}`)
})
