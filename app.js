const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/', (req, res) => res.send('Hello there.'));

const PORT = 5001;

app.listen(PORT, console.log(`Server started port ${PORT}`));