let http=require('http')
let fs=require('fs')

let server=http.createServer((req,res)=>{                              
res.write('<h1>this is my server</h1>')
res.end()


})
server.listen(7800,(err)=>{
    if(err) throw err
    console.log('server is running on port 7800')
})