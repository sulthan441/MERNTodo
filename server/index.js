import express from 'express';
// const express = require('express');
import cors from 'cors'


import Routes from './routes/route.js';

import Connection from './database/db.js';


const app = express();
app.use(express.json());

app.use(cors());

app.use('/',Routes)

app.use(express.urlencoded({extended : true}))
const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));