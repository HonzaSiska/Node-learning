const fs = require('fs')
const path = require('path')


// CREATES STREAM AND READS FOR LARGE FILES 
const rs = fs.createReadStream(path.join(__dirname,'/lorem.txt'),{
    encoding: 'utf8'
})

// CREATES NEW FILE TO WRITE A LARGE FILES
const ws = fs.createWriteStream( path.join(__dirname,'/new-lorem.txt'))

// LISTENS TO THE THE LRGE FILE DATA

//version 1 listener
rs.on('data',(dataChunk) => {
    ws.write(dataChunk)
})

// version 2 listener
rs.pipe(ws)



