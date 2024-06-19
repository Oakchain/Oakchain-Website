const courseModel = require('../dataBase/dbModel/courseModel');
const path = require('path');

const putCourse = async (req, res) => {
   //const {week, classn, title, desc, file} = req.body;

   //if(week && classn && title && desc && desc && file) {
    
    try {
        const newCourse = await courseModel.create({
            'coursename': req.body.courseName,
            'coursesummary': req.body.courseSummary,
            
            'weeknosone': req.body.week1,

            'classnosone': req.body.classn1,
            'titlenameone': req.body.title1,
            'descriptionone': req.body.desc1,
            'fileUploadone': req.body.file1,

            'classnostwo': req.body.classn2,
            'titlenametwo': req.body.title2,
            'descriptiontwo': req.body.desc2,
            'fileUploadtwo': req.body.file2,

            'classnosthree': req.body.classn3,
            'titlenamethree': req.body.title3,
            'descriptionthree': req.body.desc3,
            'fileUploadthree': req.body.file3,

            'weeknostwo': req.body.week2,

            'classnosfour': req.body.classn4,
            'titlenamefour': req.body.title4,
            'descriptionfour': req.body.desc4,
            'fileUploadfour': req.body.file4,

            'classnosfive': req.body.classn5,
            'titlenamefive': req.body.title5,
            'descriptionfive': req.body.desc5,
            'fileUploadfive': req.body.file5,

            'classnossix': req.body.classn6,
            'titlenamesix': req.body.title6,
            'descriptionsix': req.body.desc6,
            'fileUploadsix': req.body.file6,

            'weeknosthree': req.body.week3,

            'classnosseven': req.body.classn7,
            'titlenameseven': req.body.title7,
            'descriptionseven': req.body.desc7,
            'fileUploadseven': req.body.file7,

            'classnoseight': req.body.classn8,
            'titlenameeight': req.body.title8,
            'descriptioneight': req.body.desc8,
            'fileUploadeight': req.body.file8,

            'classnosnine': req.body.classn9,
            'titlenamenine': req.body.title9,
            'descriptionnine': req.body.desc9,
            'fileUploadnine': req.body.file9,

            'weeknosfour': req.body.week4,

            'classnosten': req.body.classn10,
            'titlenameten': req.body.title10,
            'descriptionten': req.body.desc10,
            'fileUploadten': req.body.file10,

            'classnoseleven': req.body.classn11,
            'titlenameeleven': req.body.title11,
            'descriptioneleven': req.body.desc11,
            'fileUploadeleven':req.body.file11,

            'classnostwelve': req.body.classn12,
            'titlenametwelve': req.body.title12,
            'descriptiontwelve': req.body.desc12,
            'fileUploadtwelve': req.body.file12,
        });
        newCourse.save();

    } catch (error){
        console.log(error);
    }

    console.log(req.body);

}

const getCourseDetails = async (req, res) => {
    try {const course = req.params;
        const data = await courseModel.find({coursename: course.name}).exec();
        res.json(data);
        //console.log(data);

    } catch (error) {
       console.log(error);
    }
}

const getCoursedb = async (req, res) => {
    try {const coursedb = req.params;
        const data = await courseModel.find({coursename: coursedb.dbname}).exec();
        res.json(data);

    } catch (error) {
        res.json({"Error": "The coure is unavailable"});
    }
}

module.exports = {
    putCourse,
    getCourseDetails,
    getCoursedb
};
