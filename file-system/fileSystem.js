// FILE SYSTEM EXERCISE

// async await

const fs = require('fs').promises
const path = require('path')

const fileOps = async () => {
    try {
        //UNLINK FILE
        await fs.unlink(path.join(__dirname, 'renamedFile.txt'))

        // READS DATA FROM FILE
        const data = await fs.readFile(path.join(__dirname, 'dataRead.txt'), 'utf-8')
        console.log(data)

        // WRITE FILE
        await fs.writeFile(path.join(__dirname, 'dataWrite.txt'),'Written file')

        // APPEND FILE
        await fs.appendFile(path.join(__dirname, 'dataWrite.txt'),'\n \nAppended file')

        // RENAME FILE
        await fs.rename(path.join(__dirname, 'dataWrite.txt'),path.join(__dirname, 'renamedFile.txt'))
    
        
    } catch (error) {
        console.log(error)
    }
    

}

fileOps()

