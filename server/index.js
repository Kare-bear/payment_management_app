const express = require('express');
const cors = require('cors');
const {json} = require('body-parser');

const app = express();

const port = 3099;

app.use(json());
app.use(cors());

app.listen(port, ()=>{
    console.log(`${port} is working properly.`);
});