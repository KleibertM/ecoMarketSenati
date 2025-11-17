import { Router } from "express"; 
import { createOrder, webhook } from "../controllers/payment.controller.js";

const router = Router();


router.post("/create-order", createOrder);

router.get("/success", (req, res) => res.send( "Pago exitoso" ));


router.get("/payment", (req, res) => {
    // Lógica para procesar el pago
    res.status(200).send({ message: "Pago procesado exitosamente" });
});


router.get("/failure", (req, res) => {
    // Lógica para manejar el pago fallido
    res.status(200).send({ message: "Pago fallido" });
}); 

router.get("/pending", (req, res) => {
    // Lógica para manejar el pago pendiente
    res.status(200).send({ message: "Pago pendiente" });
});


router.post("/webhook", webhook);

export default router;