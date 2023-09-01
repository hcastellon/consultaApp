const express = require('express')
const router = express.Router();
const db = require('../config/database');

router.get('/consult1', async (req, res) => {
    try {
        const [data] = await db.query('select * from sys.get_professors');
        console.log('Resultados de la consulta:', data);

        res.render('consult1', { title:'Node.js MySQL CRUD Application', action:'list', userData: data });
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
});

module.exports = router;