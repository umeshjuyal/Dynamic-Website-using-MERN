const mongoose = require("mongoose");

//creating a Database
mongoose.connect("mongodb://localhost:27017/umeshdynamic", {
    // useCreateIndex: true, //this is not used 
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection Sucessfully");
}).catch((err)=> {
console.log(err);
})