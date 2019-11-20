var express = require('express');
var bodyparser=require('body-parser');
var chalk = require('chalk');
var path = require('path');

var app = new express();
var nav = [{link:'/books',title:'books'},{link:'/authors',title:'authors'},{link:'/books/addbooks',title:'addbooks'}]

var booksRouter = require("./src/routes/booksrouter")(nav)

app.use(bodyparser.urlencoded({extended:true}));
app.use('/books',booksRouter);
app.use(express.static(path.join(__dirname,"public")));


app.set("views","./src/views");
app.set("view engine", "ejs");




// app.get('/',function(req,res){
//     //res.send("Hello World 5000");
//     res.sendFile(path.join(__dirname,"src/views/index.html"));
// })
app.get('/',function(req,res){
    res.render("index.ejs",{nav,title:'Library Management System'});
})



// app.get("/books/:id",function(req,res){
//     var i = req.params.id; 
//     res.render("book.ejs",{nav,book:books[i]});
// })

app.get("/authors",function(req,res){
    res.render("authors.ejs",{nav,title:'Authors'});
})

app.listen(3000,function(){
    console.log(chalk.green("Listening to port ")+chalk.red(3000)+" .............")
});
