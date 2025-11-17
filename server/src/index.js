import express from "express";
import morgan from "morgan";
import cors from "cors";
import paymentRoutes from "./routes/payment.routes.js";
import { PORT } from "./config.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

// Lista de orígenes permitidos
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://eco-market-senati.vercel.app",
  "https://ecomarketsenati.onrender.com"
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Tus rutas
app.use(paymentRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});