// const app = require("express")()
const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const data = {name : "Manish",age:22}
    res.render('home',{data})
})

app.get("/blog",(req,res)=>{
    res.render('blog')
})

app.get("/blog/create",(req,res)=>{
    res.send("Soon, here will be the create form")
})

app.get("/blog/edit",(req,res)=>{
    res.send("Soon, here will be the edit form")
})


app.listen(3000,()=>{
    console.log("Server has started at port 3000")
})