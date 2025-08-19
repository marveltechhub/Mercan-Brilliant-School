import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotnev, { configDotenv } from 'dotenv'

dotnev.config();
const app = express();

app.arguments(cors());
app.use(express.json());

