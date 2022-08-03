const { format } = require('date-fns')
const { v4: uuidv4 } = require ('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuidv4()}\t${message}`
    console.log(logItem)
    try {
        //CHECK IF LOGS FOLDER EXISTS
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        // APPEND FILE
        await fsPromises.appendFile(path.join(__dirname, 'logs','eventLog.txt'),`${logItem}\n`)
    } catch (err) {
        console.log(err)
    }
}
 module.exports = logEvents
