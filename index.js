const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    res.render("main/home.ejs");
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
});