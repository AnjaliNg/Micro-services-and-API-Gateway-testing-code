const express = require('express')
const app = express()
app.use(express.json())
var mongoose = require('./database/connection')
var router = require('./rounter/hotel.router')
app.use(router)
port=4040
app.listen(port,function (err){
    if (err){
        console.log(`${err}`)
    }else {
        console.log(`hotelServer listen Port Number in HTTP ${port}`)
    }

})



const connectDB = async () => {
    try {
        const response = await fetch('http://localhost:5050/rating');
        const data = await response.json();

        console.log(data);
    } catch (err) {
        console.log('Failed to connect to MongoDB', err)
    }
}

connectDB()