
var express =require('express');
var bodyParser = require('body-parser');
var path = require('path'); 
var app = express (); 

/*var logger = function(req, res, next){
	console.log('Logging, yo...');
	next();
}

app.use(logger);
*/

//body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set static path
app.use(express.static(path.join(__dirname, 'public')))

/*var people = [
	{
		name:'Jeff',
		age: 30
	},
	{
		name:'Sara',
		age:22
	},
	{
		name:'Bilbo',
		age: 35
	}
]
*/

//email that guy

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes handler
app.get('/', function(req, res){
	res.render('index');

});



app.listen(3000, function(){
	console.log('server started on port 3000');
})