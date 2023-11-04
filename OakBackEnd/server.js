const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const routesHandler = require('./routes/routeHandler.js');
const PORT = process.env.PORT || 4300;

const whitelist = ["Website domain name", 'http://127.0.0.1:5500']
const corsOptions = {
    origin: (origin, callback) =>{
        if(whitelist.indexOf(origin) != -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/build')));
app.use('/', routesHandler);

app.listen(PORT, () => console.log('Server is running on port', PORT));