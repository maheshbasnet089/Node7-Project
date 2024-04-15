// const app = require("express")()
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("bye world")
})


app.listen(3000,()=>{
    console.log("Server has started at port 3000")
})