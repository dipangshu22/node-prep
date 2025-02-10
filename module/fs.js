let fs=require('fs')
// fs.writeFile('my code.txt','we are writting code in node js',(err)=>{
//     if (err) throw err
//     console.log("the file is created")
// })

// fs.appendFile('my code.txt',' it is great to learn',(err)=>{
//     if(err) throw err
//     console.log("appended")

// })
// fs.readFile('mu code.txt','utf-8' ,(err,data)=>{
//     if (err) throw err
//     console.log(data)
// })

// fs.unlink('mu code.txt',(err)=>{
//     if(err) throw err
//     console.log("file deleted")

// })

fs.rename('my code.txt','my file.txt',(err)=>{
    if(err) throw err
    console.log("file renamed")

})