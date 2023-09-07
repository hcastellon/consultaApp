const express = require('express');
const router = express.Router();

router.get('/list', (req, res)=>{
    const user = req.session.user;
    res.render('menu', { user });
})

module.exports = router;