const gateway = require('fast-gateway')
const cote = require('cote')

const hotelRequester = new cote.Requester({name:'hotel requester'})
const ratingResponder = new cote.Responder({name:'rating responder'})


const server = gateway({
    routes: [{
        prefix: '/hotel',
        target: 'http://localhost:4040'
    },
        {
            prefix: '/rating',
            target: 'http://localhost:5050'
        },
        {
            prefix: '/user',
            target: 'http://localhost:6060'
        }]
})



server.start(8080).then(server=>{
    console.log('server listen in port 8080',)
})