//IMPORT MODULES
var express = require("express"); //Use Express framework
var app = express(); //Setup the app in Express
var bodyParser = require('body-parser'); // to use POST data as JSON objects
var mongoose = require('mongoose'); //work with MONGODB
const path = require('path'); 

//SET AND USE MODULES
app.set('views', __dirname + '/views'); // Look in views for your templates
app.set('view engine', 'ejs'); // use .ejs documents with embedded javaScript
app.use(express.static(__dirname + "/static")); // enable accessing of static documents
app.use(bodyParser.urlencoded({extended: true})); // use bodyParser
app.use(express.static(path.join(__dirname, '/public/dist')));
mongoose.connect('mongodb://localhost/basic_mongoose'); // Use Mongoose

//MODELS
var NoteSchema = new mongoose.Schema({
	content:  { type: String, required: true, minlength: 3}},
    {timestamps: true})//Create a Schema (model)makes it so we have IDs with timestamps.
mongoose.model('Note', NoteSchema); 
var Note = mongoose.model('Note') 
	

//ROUTES

app.get('/', function (req, res){
	req.session.count += 1;
	res.render('index.html', {title: "Anonymous Notes"});
});






//LISTEN ON PORT - KEEP THIS AT THE END
app.listen(8000, function() {
  console.log("listening on port 8000");
})
