//require('dotenv').config({ path: '../.env' })
import express from 'express';
const { static: staticServe } = express;
const app = express();
const port = process.env.PORT || 3000;
import fetch from 'node-fetch';
import fs from 'fs/promises';

// Read .env file and set environment variables
// async function loadDotenv() {
    // try {
    //   const dotenv = await import('dotenv');
    //   const envConfig = await fs.readFile('../.env', 'utf8');
    //   dotenv.config({ path: './.env' });
    //   dotenv.parse(envConfig);
    //   console.log('Dotenv loaded');
    // } catch (error) {
    //   console.error('Error loading dotenv', error);
    // }
//   }

//loadDotenv();

app.use(staticServe('.'));

app.get('/weather', async (req, res) => {
  const city = req.query.city || 'Abidjan';
  const response = await fetch(`http://172.17.0.1:${process.env.BACKEND_PORT}/weather?city=${city}`);
  //const response = await fetch(`http://localhost:5050/weather?city=${city}`);
  const data = await response.json();
  res.json(data);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
