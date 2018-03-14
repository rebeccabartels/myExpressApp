
var express =require('express');
var bodyParser = require('body-parser');
var path = require('path'); 

var app = express (); 

//middlewear 

var logger = function(req, res, next) {
	console.log("Logging...");
	next();
}



// View Engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//app.use(logger); //to use middlewear pass in logger 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); //bodyparser middlewear


//Set static/public path

app.use(express.static(path.join(__dirname, 'public')))

//routes handler
app.get('/', function(req, res){
	
	res.render('index', {
		title: 'Customers'
	}); 
});

app.listen(3000,  function(){
	console.log('Server started on Port 3000');
})