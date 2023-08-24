const express = require('express');
const session = require('express-session');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const authRoutes = require('./controllers/authController');
const reportController = require('./controllers/reportController');
const menuController = require('./controllers/menuController');

const publicDir = path.join(__dirname, './public');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set up the session
app.use(session({
    secret: 'j2ODBoRAZ0$@uYAp',
    resave: false,
    saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/', reportController);
app.use('/', menuController);
app.use(express.static(publicDir));

// Route for the login page
app.get('/index', (req, res) => {
    res.render('index');
});

// Route for the authentication page
app.use(authRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server started on port ${PORT}');
});