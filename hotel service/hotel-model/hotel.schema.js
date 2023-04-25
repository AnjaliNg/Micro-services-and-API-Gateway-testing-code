const mongoose=require('mongoose')

const hotelSchema =new mongoose.Schema({
    hotelName: {
        type: String,
        require: true,
        default: null
    },
    Address: {
        type: String,
        require: true,
        trim: true,
        default: null
    },
})

    const Hotel = new mongoose.model('Hotel',hotelSchema)

    module.exports = Hotel
