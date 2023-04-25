const express = require('express')
const app = express()

const mongoose = require('./user-database/connection')
const router = require('./user-router/user-router')

app.use(express.json())

app.use(router)

port=6060

app.listen(port,function (err){
    if (err){
        console.log(`${err}`)
    }else {
        console.log(`userServer listen Port Number in HTTP ${port}`)
    }

})

console.log('user service')