import express from "express"
var app = express();
app.set("view engine", "ejs")
var port = 3000;

import * as routes from "./routes/index.js";

import dateFormat, { masks } from "dateformat";
var date = dateFormat(now,"dddd, mmmm dS, yyyy, h:MM:ss TT");
var now = new Date;

//From stackoverflow - include a folder with ejs
app.use('/public', express.static('public'));

app.use(function(request, response, next){
    console.log("Time is:",date);
    next();
})

// Home Page
app.get("/", routes.home);

// About Page
app.get("/about", function(request, response, next){
    console.log("Oh boy! User's on their way to:");
    next();
}, 
function (request, response, next){
    console.log("THE ABOUT PAGE! OH GOD!")
    next();
});

app.get("/about", routes.about);

// Contact "Page"
app.get("/contact", function(request, response, next){
    console.log("User navigated to page:");
    next();
}, function (request, response, next){
    console.log("Contact");
    next();
});

app.get("/contact", function(request, response){
    response.send("This is the contact page");
});

// Star Wars Movie Page
app.get('/starwarsep/:epnum?', routes.starwarsmovie);

// 404 - Page Not Found (Takes in any parameter to display back the name)
app.get('/:madeuppage?', routes.notfound);

// Runs the server
app.listen(port, function(){
    console.log("Da serva runnin' on port " + port);});