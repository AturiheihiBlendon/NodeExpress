const fs = require('fs')

const content = fs.readFileSync('./filesystem/lorem.txt','utf8')
console.log(content)

console.log("******************************************************");

const data = "Hello I am greeting you in a new file"
const new_content = fs.writeFileSync('./filesystem/greet.txt',`${data}`)
console.log(fs.readFileSync('./filesystem/greet.txt','utf8'));