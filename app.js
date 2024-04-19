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
    res.render("createblog")
})

app.get("/blog/edit",(req,res)=>{
    res.render('editblog')
})


app.listen(3000,()=>{
    console.log("Server has started at port 3000")
})