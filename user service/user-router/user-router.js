const express = require('express')
const router = express.Router()
const Hotel = require('../user-model/user-schema')

router.post('/user',async function (req,res){
    try{
        const hotel = new Hotel({
            hotelName:req.body.hotelName,
            Address:req.body.Address
        })
        var saveData = await hotel.save()

        res.json({
            Status: "SUCCESS",
            language: "en_US",
            statusCode: res.statusCode,
            data: saveData,
            error: null
        })

    }catch (e) {
        res.send(e)
    }
})

router.get('/user',async function (req,res){
    try{

        var saveData = await Hotel.find()

        res.json({
            Status: "SUCCESS",
            language: "en_US",
            statusCode: res.statusCode,
            data: saveData,
            error: null
        })

    }catch (e) {
        res.send(e)
    }
})

module.exports=router