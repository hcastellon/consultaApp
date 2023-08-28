const express = require('express')
const router = express.Router();
const db = require('../config/database');

//router.get('/consult1', function (req, res, next){
//    const query = 'call sys.get_professors()';
//    db.query(query, function (err, data) {
//        if(err)
//        {
//            throw err;
//        }
//        else
//        {
//            console.log('Resultados de la consulta:', data);
//            res.render('results', {title:'Node.js MySQL CRUD Application', action:'list', sampleData:data });
//        }
//    });
//});

//router.get('/consult1', function (req, res) {
//    db.query('call sys.get_professors()', function (err, rows) {
//        if (err) throw err;
//        
//        res.render('results', { results: rows });
//    });
//
//});

router.get('/consult1', async (req, res) => {
    try {
        const [rows] = await db.query('call sys.get_professors()');
        console.log('Resultados de la consulta:', rows);

        res.render('results', { title:'Node.js MySQL CRUD Application', action:'list', results: rows });
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
});

module.exports = router;