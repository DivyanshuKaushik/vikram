const express = require('express')
const app = express()

const PORT = 5000;

app.get('/api',(req,res)=>{
    res.send('hello vikram server')
})


app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})