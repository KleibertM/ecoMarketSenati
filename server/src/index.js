import express from 'express';
import morgarn from 'morgan';
import paymentRoutes from './routes/payment.routes.js';
import cors from 'cors';
import { PORT } from './config.js';


const app = express();
app.use(morgarn('dev'));
app.use(express.json());

// Configuración de CORS para permitir solicitudes desde múltiples orígenes
const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000', 'eco-market-senati.vercel.app', 'https://ecomarketsenati.onrender.com'];
const corsOptions = {
  origin: function(origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// Middleware para configurar las cabeceras CORS 
app.use((req, res, next) => { 
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  if (req.method === 'OPTIONS') 
    { return res.status(200).end(); } next(); }); 

app.use(paymentRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});