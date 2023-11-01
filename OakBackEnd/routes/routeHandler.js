const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/home', (req, res) =>{
    // Database query
    //const str=

    res.end(JSON.stringify(str));
});

router.get('^/news', (req, res) =>{
    // Database query
    // const str=

    res.end(JSON.stringify(str));
});

router.get('/news/:id', (req, res) =>{
    // Database query
    const routeParam = req.params.id;
    
    //const str = 

    res.end(JSON.stringify(str));
});

router.get('/academy', (req, res) =>{
    // Database query
    
    //const str = 

    res.end(JSON.stringify(str));
});

router.get('/academy/article/:id', (req, res) =>{
    // Database query
    const routeParam = req.params.id;

    //const str = 

    res.end(JSON.stringify(str));
});

router.get('/academy/article/:id', (req, res) =>{
    // Database query
    const routeParam = req.params.id;
    
    //const str = 

    res.end(JSON.stringify(str));
});


router.post('', (req, res) => {
    res.end('NA');
});


module.exports = router;