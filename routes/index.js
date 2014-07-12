/* var express = require('express');
var router = express.Router();


var mongoose = require( 'mongoose' );
var Comment = mongoose.model( 'Todo' );

exports.index = function ( req, res ){
  Todo.find( function ( err, todos, count ){
    res.render( 'index', {
        title : 'Comment System with Mongoose and Node Todos',
        todos : todos
    });
  });
};
*/
var express = require('express');
var router = express.Router();

var mongoose = require( 'mongoose' );
var Todo = mongoose.model( 'Todo' );

/* GET home page. */
router.get('/', function ( req, res ){

//new Todo({surname:"Martínez", name:"Aleix1"}).save();
//new Todo({surname:"Salvà", name:"Chunita1"}).save();
//Commetario de 

  Todo.find( function ( err, todos, count ){
    res.render( 'index', {
        title : 'Comment System with Mongoose and Node Todos',
        todos : todos
    });
  });
});

router.post('/create', function ( req, res ){

  new Todo({
    name: req.body.name,
    surname: req.body.surname
  }).save(function ( err, todo, count ){
    if( err ) return next( err );

    res.redirect( '/' );
  });

});

module.exports = router;
