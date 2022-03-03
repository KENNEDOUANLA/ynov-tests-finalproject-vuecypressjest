const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const db = require('./config')
const cartRoutes = require('./routes/cart')

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
})

app.use(bodyParser.json())

app.use('/cart', cartRoutes)

module.exports = app;