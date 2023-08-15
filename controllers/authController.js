const express = require('express');
const router = express.Router();
const db = require('../config/database');


// Route to display the login form
router.get('/login', (req, res) => {
    res.render('login');
});

// Route to handle the login form submission
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const rows = await db.query('SELECT * FROM sys.usuarios WHERE username = ? AND password = ?', [username, password]);

        if (rows.length > 0) {
            // user authenticated, save session info
            req.session.user = rows[0];
            res.redirect('/dashboard'); // 
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    });

module.exports = router;