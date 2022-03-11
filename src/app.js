// Express 
const express =require("express");
//path of static website
const path = require("path");
//to require db file to use in App
require("./db/conn");

const User= require("./models/usermessage")
//for the handler bar template,Partials
const hbs = require("hbs");
const async = require("hbs/lib/async");
const res = require("express/lib/response");
const app= express();
const port =process.env.PORT || 3000;

//to using the Static website which is present in public folder use in App folder
//setting the path
const staticpath= path.join(__dirname,"../public");
//to know for Express App we set the path for Templates & Partials Folder
const templatepath= path.join(__dirname,"../templates/views");
const partialpath= path.join(__dirname,"../templates/partials");

//middleware
app.use(express.static(staticpath));
//Adding bootstrap ,Js,Jquery
app.use('/css',express.static(path.join(__dirname ,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname ,"../node_modules/bootstrap/dist/js")));
app.use('/jquery',express.static(path.join(__dirname ,"../node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false}))
//use view engine handler bars and to tell the Express Appl.
app.set("view engine", "hbs");
//for Template path
app.set("views",templatepath);
hbs.registerPartials(partialpath);

// body parser to tell the Express Appl

//Routing
//app.get(path ,callback)  //Syntax
app.get("/", (req, res)=>{
// res.send("Hello ,I am Good");
res.render("index"); //using of index.hbs
})

// app.get("/contact", (req, res)=>{
//     res.render("contact"); //using of contact file
// })

app.post("/contact",async(req ,res)=>{
    try{
    res.send(req.body);  //postman
    const userData = new User(req.body);
    await userData.Save();
    res.status(201).render("/index");
    } catch(error){
        res.status(500).send(error);
    }
})
//server create
app.listen(port ,()=>{
    console.log(`Server is running at port no ${port}`);
})