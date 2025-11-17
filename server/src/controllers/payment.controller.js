import mercadopago from "mercadopago";
import dotenv from "dotenv";
import { BASE_URL } from "../config.js";
dotenv.config();

// Crear cliente con tu access token
const client = new mercadopago.MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
});

export const createOrder = async (req, res) => {
  try {
    const { cart, total, date } = req.body;
    if (!cart || cart.length === 0) {
      throw new Error("No hay elementos en el carrito");
    }

    const preference = new mercadopago.Preference(client);

    const items = cart.map(item => ({
      id: item.id,
      title: item.title || `Producto ${item.id}`,
      quantity: Number(item.quantity),
      unit_price: parseFloat(item.price), // ojo: en tu frontend se llama "price", no "unit_price"
      currency_id: "PEN",
    }));

    const result = await preference.create({
      body: {
        items,
        back_urls: {
          success: `${BASE_URL}/success`,
          failure: `${BASE_URL}/failure`,
          pending: `${BASE_URL}/pedning`,
        },
        notification_url: "https://8919e1068f2e.ngrok-free.app/webhook",
      },
    });
    res.json(result.init_point); // devuelve init_point y demás
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creando orden");
  }
};

export const webhook = async (req, res) => {
  try {
    const { type, ["data.id"]: dataId } = req.query;

    if (type === "payment") {
      const payment = new mercadopago.Payment(client);
      const result = await payment.get({ id: dataId });

      console.log("Pago recibido:", result.body);
      // Aquí puedes actualizar tu BD con result.body.status, result.body.external_reference, etc.
    }

    // Siempre responde una sola vez
    res.sendStatus(200);
  } catch (error) {
    console.error("Error en webhook:", error);
    res.status(500).json({ error: "Error en el webhook" });
  }
};
