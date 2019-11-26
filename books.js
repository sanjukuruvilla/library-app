var mongoose=require('mongoose')
var schema=mongoose.Schema;

var booksschema=new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    genre:{type:String,required:true},
    cover:{data:Buffer,type:String}

});

var booksmodel=mongoose.model("books",booksschema,"books_table")

module.exports=booksmodel;
