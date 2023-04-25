const express = require('express')
const fetch = require ('node-fetch');
const app = express()
app.use(express.json())
var mongoose = require('./rating-database/connection')
var router = require('./rating-router/rating-router')
app.use(router)
port=5050


  function  mahesh(){

}





app.listen(port,function (err){
    if (err){
        console.log(`${err}`)
    }else {
        console.log(`ratingServer listen Port Number in HTTP ${port}`)
    }

})