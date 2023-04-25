const express = require('express')
const router = express.Router()
const Hotel = require('../hotel-model/hotel.schema')
const cote = require('cote')

const ratingRequester = new cote.Requester({name:'rating requester'})
const hotelResponder = new cote.Responder({name:'hotel responder'})

hotelResponder.on('list12',async req=>{
    console.log('step 2 ')
    var saveData = await Hotel.find()

    return saveData
})


router.post('/hotel',async function (req,res){
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

router.get('/hotel',async function (req,res){
    try{





        res.json({
            Status: "SUCCESS",
            language: "en_US",
            statusCode: res.statusCode,
            data: patient,
            error: null
        })

    }catch (e) {
        res.send(e)
    }
})

module.exports=router