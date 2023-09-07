const express = require('express');
const session = require('express-session');
const mysql = require('mysql2');
const path = require('path');
const logger = require('morgan');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
//const expressValidator = require('express-validator');

const app = express();
const authController = require('./controllers/authController');
const reportController = require('./controllers/reportController');
const menuController = require('./controllers/menuController');

const publicDir = path.join(__dirname, './public');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set up the session
app.use(session({
    secret: 'j2ODBoRAZ0$@uYAp',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/report', reportController);
app.use('/menu', menuController);
// Route for the authentication page
app.use('/auth', authController);
app.use(express.static(publicDir));
app.use(logger('dev'));
app.use(cookieParser());
//app.use(expressValidator());
app.use(flash());

// Route for the login page
app.get('/index', (req, res) => {
    res.render('index');
});



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server started on port ${PORT}');
});