const express = require('express')
const router = express.Router();
const db = require('../config/database');


router.get('/consult1', async (req, res) => {
    try {
        const [rows] = await db.query('call get_professors()');
        console.log('Resultados de la consulta:', rows);

        res.render('results', { results: rows });
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
});

module.exports = router;