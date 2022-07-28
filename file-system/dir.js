const fs = require('fs')

// CREATES NEW DIRTECTORY IF IT DOESNT EXIST
if(!fs.existsSync('./new')){
    fs.mkdir('./new', (error) => {
        if(error) throw error
        console.log('Directory created')
    
    })
}else{
    console.log('directory exists')
}


// DELETES DIRECTORY IF IT EXISTS
if(fs.existsSync('./new')){
    fs.rmdir('./new', (error) => {
        if(error) throw error
        console.log('Directory removed')
    
    })
}else{
    console.log('directory doesnt exist')
}
