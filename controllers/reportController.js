const express = require('express')
const router = express.Router();
const db = require('../config/database');


router.get('/report', async (req, res) => {
    try {
        const [rows] = await db.query('call get_professors()');

        res.render('results', { results: rows });
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
});

module.exports = router;