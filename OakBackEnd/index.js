const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const PORT = process.env.PORT || 4300;

app.use(cors());


app.listen(PORT, () => console.log('Server is running on port', PORT));