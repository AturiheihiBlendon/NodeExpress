const fs = require('fs')

// Readfile Sync

// const content = fs.readFileSync('./filesystem/lorem.txt','utf8')
// console.log(content)

// console.log("******************************************************");

// const data = "Hello I am greeting you in a new file"
// const new_content = fs.writeFileSync('./filesystem/greet.txt',`${data}`)
// console.log(fs.readFileSync('./filesystem/greet.txt','utf8'));


// Readfile Asynch

const content = fs.readFile('./filesystem/lorem.txt', 'utf8', (err, data) => {
    if (err){
        console.log(err)
    }
    console.log(data)
})