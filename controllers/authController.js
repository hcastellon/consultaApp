const express = require('express');
const router = express.Router();
const db = require('../config/database');
const bcrypt = require('bcrypt');


// Route to display the login form
router.get('/login', (req, res) => {
    res.render('login');
});

// Route to handle the login form submission
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    

    try {
        const [rows] = await db.query('SELECT * FROM sys.usuarios WHERE username = ?', [username]);
        //console.log(rows)
        if (rows.length > 0) {
            const user = rows[0];
            //console.log(user.password);
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                req.session.user = user;
                res.redirect('/menu');
            } else {
                res.render('login', { error: 'Acceso inválido. Por favor, inténtelo otra vez.' });
            }
        } else {
            res.render('login', { error: 'Acceso inválido. Por favor, inténtelo otra vez.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

});

module.exports = router;