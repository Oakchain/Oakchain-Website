const express = require('express');
const app = express();
// const cors = require('cors');
const routesHandler = require('./routes/routeHandler.js');
const PORT = process.env.PORT || 4300;

/*const whitelist = ["Website domain name", 'http://127.0.0.1:5500']
const corsOptions = {
    origin: (origin, callback) =>{
        if(whitelist.indexOf(origin) != -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}*/

// app.use(cors(corsOptions));
app.use('/', routesHandler);
app.use(express.json());

app.listen(PORT, () => console.log('Server is running on port', PORT));
