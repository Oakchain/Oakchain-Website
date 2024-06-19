const express = require ('express');
const router = express.Router();
const courseController = require('../controller/courseController');

router.route('/:name')
    .get(courseController.getCourseDetails);

router.route('/postCourse')
    .post();

module.exports = router; 