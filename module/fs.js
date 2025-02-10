let fs=require('fs')
fs.writeFile('my code.txt','we are writting code in node js',(err)=>{
    if (err) throw err
    console.log("the file is created")
})