const express = require('express');
const router = express.Router();

router.get('/learn', (req,res) => {
    // Query db
    console.log("Server is feeding learn page");
})

router.get('/about', (req,res) => {
    // Query db
    console.log("Server is feeding about page");
})

router.get('/news', (req,res) => {
    // Query db
    console.log("Server is feeding news page");
})

module.exports = router;