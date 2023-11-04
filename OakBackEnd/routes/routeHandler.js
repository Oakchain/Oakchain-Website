const express = require('express');
const router = express.Router();


router.get('/learn', (req,res) => {
    //Query db code
    
    console.log('Learn page');
})

router.get('/news', (req,res) => {
    //Query db code
    
    res.send();
})

router.get('/news/:id', (req,res) => {
    //Query db code
    const data = req.body;

    res.send();
})

router.get('/academy', (req,res) => {
    //Query db code
    
    res.send();
})

router.get('/academy/article/:id', (req,res) => {
    //Query db code
    const data = req.body;
    
    res.send();
})

router.get('/academy/video/:id', (req,res) => {
    //Query db code
    const data = req.body;
    
    res.send();
})

router.get('/academy/episode/:id', (req,res) => {
    //Query db code
    const data = req.body;

    res.send();
})

router.get('/podcast', (req,res) => {
    //Query db code
    
    res.send();
})

router.get('/tasks', (req,res) => {
    //Query db code
    
    res.send();
})

router.get('/about', (req,res) => {
    //Query db code
    
    res.send();
})

router.get('/blog', (req,res) => {
    //Query db code
    
    res.send();
})

router.get('/server', (req,res) => {
    //Query db code
    
    res.send();
})

router.get('/marketplace', (req,res) => {
    //Query db code
    
    res.send();
})

module.exports = router;