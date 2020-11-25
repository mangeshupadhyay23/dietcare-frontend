const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    res.render("main/home.ejs", {
        pageTitle: 'Home'});
})
app.get('/cookbook',(req,res)=>{
    res.render("main/cookbook.ejs", {
        pageTitle: 'CookBook'});
})
app.get('/planmeals',(req,res)=>{
    res.render("main/planmeals.ejs", {
        pageTitle: 'PlanMeals'});
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
});