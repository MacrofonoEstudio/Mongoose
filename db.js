var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var Todo = new Schema({
    name    : String,
    surname: String
});
 
mongoose.model( 'Todo', Todo );
mongoose.connect( 'mongodb://localhost/express-todo' );