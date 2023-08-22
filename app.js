const express = require('express');
const session = require('express-session');
const mysql = require('mysql2');

const app = express();
const authRoutes = require('./controllers/authController');
const reportController = require('./controllers/reportController');

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

// Route for the login page
app.get('/login', (req, res) => {
    res.render('login');
});

// Route for the authentication page
app.use(authRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server started on port ${PORT}');
});