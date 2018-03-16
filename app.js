
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

var users = [
	{
		id:1,
		first_name:'Jeff',
		last_name: 'Doe',
		email:'johndoe@gmail.com',
	},
	{
		id:2,
		first_name:'Sara',
		last_name:'swartz',
		email: 'saraswartz@gmail.com',
	},
	{
		id: 3,
		first_name:'Jill',
		last_name: 'Jackson',
		email: 'jilljackson@gmail.com',
	}
]


//email that guy

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes handler
app.get('/', function(req, res){

	res.render('index', {
		title: 'Customers',
		users:  users
	});

});



app.listen(3000, function(){
	console.log('server started on port 3000');
})