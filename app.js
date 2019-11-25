var express = require('express');
var chalk = require('chalk');
var path = require('path');

var nav = [{link:'/books',title:'books'},{link:'/authors',title:'authors'},{link:'/books/addbooks',title:'Add Book'}]
var bodyParser = require('body-parser');
var authorsRouter = require('./src/routes/authorsrouter.js')(nav);
var booksRouter = require('./src/routes/booksrouter.js')(nav);
//var accountsRouter = require('./src/routes/accountsrouter.js')(accounts);

var app = new express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/authors',authorsRouter); //AUTHOR
app.use('/books',booksRouter); //BOOK
//app.use('/accounts',accountsRouter); //ACCOUNTS
app.use(express.static(path.join(__dirname,"public")));

app.set("views","./src/views");
app.set("view engine", "ejs");

app.get('/',function(req,res){
    res.render("index.ejs",{nav,title:'Library Management System'});
})

                                    /* ACCOUNTS */

var accounts=[];

    app.get('/accounts/login',(req,res)=>{
        res.render("login.ejs",{title:'LOGIN'});
    })

    app.get('/accounts/signup',(req,res)=>{
        res.render('signup.ejs',{title:'SIGN UP'})
    })

    app.post('/accounts/validate-login',(req,res)=>{
        var flag =-1;
        var login = req.body;
        console.log(login);
        for(var i=0;i<accounts.length;i++){
            if(login.username == accounts[i].username && login.password == accounts[i].password){
                res.send("Logged into "+accounts[i].username);
                flag = 0;
            }
        }
         if(flag == -1){
            res.send("Error")
        }    
    })

    app.post('/accounts/validate-signup',(req,res)=>{
        var details = req.body;
        if(details.password == details.re_password){
            accounts.push(details);
        }
        
        console.log(accounts);
        console.log(accounts.length);
        res.render("index.ejs",{nav,title:'Library Management System'})
    })

app.listen(3000,function(){
    console.log(chalk.green("Listening to port ")+chalk.red(3000)+" .............")
});
