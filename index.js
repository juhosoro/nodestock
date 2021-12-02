const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 5000;

// Set Express Handlebars Middleware
var hbs = exphbs.create({defaultLayout: 'main'});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Unlike in vanilla express, in the case of handlebars, we have to create routes for different pages (bc not static)

// passing stuff from the backend to the front end using handlebars
const otherstuff = "Hello there, this is other stuff"

// Set handlebar routes
app.get('/', function(req, res) {
    res.render('home', {
        stuff: "This is stuff..."   // Creating for example, a variable called stuff and giving it a value from 'otherstuff'
    });
});

// Set static folder 
// Routing for static files is easy with express
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on Port ' + PORT));


// NOTE: think 'views' as pages and 'layouts' as templates