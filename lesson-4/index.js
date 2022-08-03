const logEvents = require('./logEvents')

const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

//initialize object
const myEmitter = new MyEmitter()

// add listener for the long event

myEmitter.on('log', (msg) => logEvents(msg))

setInterval(()=> {
    //emit event
    myEmitter.emit('log', 'log event emited test')
}, 1000)