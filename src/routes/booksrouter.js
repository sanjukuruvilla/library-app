var express=require('express');
const booksRouter=express.Router();

var books = [
    {
        title: "War And Peace",
        genre:"Historical fiction",
        author:"Lev Nicolas",
        image:"war and peace.jpg"
    },
    {
        title: "Harry Potter",
        genre:"Fantasy fiction",
        author:"J.K Rowling",
        image:"harrypotter.jpg"
    },
    {
        title: "Goosebumps",
        genre:"Short Story",
        author:"R.L Stine",
        image:"goosebumps.jpg"
    },
    {
        title: "Nancy Drew",
        genre:"Crime thriller",
        author:"Donald Nick",
        image:"nancy drew.jpg"
    }
]

function Router(nav){
    booksRouter.route('/')
    .get((req,res)=>{
        res.render("books.ejs",{nav,title:'Books',books});
    });

    booksRouter.route('/addbooks')
    .get((req,res)=>{
        res.render("addbooks.ejs",{nav,title:'ADD BOOKS'});
    });
    booksRouter.route('/save')
    .post((req,res)=>{
        res.send("congrats");
        console.log(req.body);
    });
booksRouter.route('/:id')
    .get((req,res)=>{
        var i = req.params.id; 
        res.render("book.ejs",{nav,book:books[i]});
    })
return(booksRouter);
};

  




module.exports=Router;
