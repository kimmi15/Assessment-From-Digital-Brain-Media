import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import rout from './router/rout.js'
import cors from 'cors'

dotenv.config({ path: './config/.env' });

const app = express();
app.use(cors());

mongoose.connect(process.env.DB_URL).then(_ => console.log('DB connected')).catch(err => console.log(err));


app.use(express.json());

app.use('/', rout);

app.listen(process.env.PORT || 3002, _ => console.log('server is running on ' + process.env.PORT || 3002))