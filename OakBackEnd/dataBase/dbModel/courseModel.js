const mongoose = require('mongoose');
const Schema = mongoose.Schema

const courseDetailsSchema = new Schema({
    coursename: {type: String, required: false},
    coursesummary: {type: String, required: false},

    weeknosone: {type: String, required: false},

    classnosone: {type: String,required: false },
    titlenameone: {type: String,required: false},
    descriptionone: {type: String, required: false},
    fileUploadone: {type: String,required: false},

    classnostwo: {type: String,required: false},
    titlenametwo: {type: String,required: false},
    descriptiontwo: {type: String, required: false},
    fileUploadtwo: {type: String,required: false},

    classnosthree: {type: String,required: false},
    titlenamethree: {type: String,required: false},
    descriptionthree: {type: String, required: false},
    fileUploadthree: {type: String,required: false},

    weeknostwo: {type: String, required: false},

    classnosfour: {type: String,required: false},
    titlenamefour: {type: String,required: false},
    descriptionfour: {type: String, required: false},
    fileUploadfour: {type: String,required: false},

    classnosfive: {type: String,required: false},
    titlenamefive: {type: String,required: false},
    descriptionfive: {type: String, required: false},
    fileUploadfive: {type: String,required: false},

    classnossix: {type: String,required: false},
    titlenamesix: {type: String,required: false},
    descriptionsix: {type: String, required: false},
    fileUploadsix: {type: String,required: false},

    weeknosthree: {type: String, required: false},

    classnosseven: {type: String,required: false},
    titlenameseven: {type: String,required: false},
    descriptionseven: {type: String, required: false},
    fileUploadseven: {type: String,required: false},

    classnoseight: {type: String,required: false},
    titlenameeight: {type: String,required: false},
    descriptioneight: {type: String, required: false},
    fileUploadeight: {type: String,required: false},

    classnosnine: {type: String,required: false},
    titlenamenine: {type: String,required: false},
    descriptionnine: {type: String, required: false},
    fileUploadnine: {type: String,required: false},

    weeknosfour: {type: String, required: false},

    classnosten: {type: String,required: false},
    titlenameten: {type: String,required: false},
    descriptionten: {type: String, required: false},
    fileUploadten: {type: String,required: false},

    classnoseleven: {type: String,required: false},
    titlenameeleven: {type: String,required: false},
    descriptioneleven: {type: String, required: false},
    fileUploadeleven: {type: String,required: false},

    classnostwelve: {type: String,required: false},
    titlenametwelve: {type: String,required: false},
    descriptiontwelve: {type: String, required: false},
    fileUploadtwelve: {type: String,required: false}
});

module.exports = mongoose.model('Coursedb', courseDetailsSchema);