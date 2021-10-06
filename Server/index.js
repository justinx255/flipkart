import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import Connection from './config/db.js';
import DefaultData from './landing.js';
import cors from 'cors';
import Routes from './routes/routes.js';

dotenv.config();
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extenden: true }));
app.use(cors());
app.use('/', Routes);

app.use('/signup', () => {});

const PORT = 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
app.listen(PORT, () => {
	console.log('====================================');
	console.log(`Server is SUccessfully running on port${PORT}`);
	console.log('====================================');
});

DefaultData();
