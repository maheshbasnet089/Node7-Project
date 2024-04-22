// const app = require("express")()
const express = require('express')
const { blogs } = require('./model/index')
const app = express()

require("./model/index")
app.set('view engine','ejs')

const {multer,storage}  = require('./middleware/multerConfig')
const upload = multer({storage : storage})

app.use(express.json())
app.use(express.urlencoded({extended : true}))

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


app.post('/blog',upload.single('image'), async (req,res)=>{
    // const title = req.body.title 
    // const subtitle = req.body.subtitle 
    // const description = req.body.description 
 
    const {title,subtitle,description} = req.body 
    await blogs.create({
        title  : title,
        subTitle : subtitle,
        description : description,
        imageUrl : req.file.filename
    })
    res.redirect("/")
})


app.listen(3000,()=>{
    console.log("Server has started at port 3000")
})