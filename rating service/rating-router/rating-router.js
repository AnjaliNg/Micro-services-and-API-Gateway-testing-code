const express = require('express')
const router = express.Router()
const Hotel = require('../rating-model/rating-schema')

const cote = require('cote')


const hotelRequester = new cote.Requester({name:'rating requester'})
const ratingResponder = new cote.Responder({name:'hotel responder'})


ratingResponder.on('list5',async req=>{
  try{
      console.log(req)
      const hotel = new Hotel({
          hotelName:req.body.hotelName,
          Address:req.body.Address
      })
      var saveData = await hotel.save()

      return saveData
  }catch (err) {
      console.log(err)
  }


})



router.post('/rating',async function (req,res){
    try{
        const hotel = new Hotel({
            hotelName:'hyhy',
            Address:'hyhy'
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

router.get('/rating',async function (req,res){
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