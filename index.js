// const express = require('express')
import express from 'express'
import product from './product'

const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))

const products = product

app.get('/', (request, response) => {
    response.send(products)
})
app.get('/api/:idUser', (request, response) => {
    const { idUser } = request.params
    const producto = products.find(user => user.id === idUser)
    if (!usuario) return response.send('No existe el producto')
    response.send(producto)
})

app.get('/productos', (req, res) => {
    res.send({
        title: 'producto1',
        description: 'Este es un producto',
        price: 2500,
        code: 'abc123',
        stock: 25
    })
})

app.get('/params/:title/:id', (req, res) => {
    console.log(req.params)
    const { title, id } = req.params
    res.send({
        title,
        id
    })
})


app.listen(PORT, err => {
    if (err) console.log(err)
    console.log(`Escuchando en el puerto ${PORT}`)
})
