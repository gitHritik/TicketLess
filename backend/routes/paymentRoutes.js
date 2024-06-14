import express from "express";
import Stripe from "stripe";
import authenticateJWT from "../utils/authenticateJWT.js";

const router = express.Router();
const stripe = new Stripe("your_stripe_secret_key");

router.post("/create-checkout-session", authenticateJWT, async (req, res) => {
  const { products } = req.body;

  const adultQuantity = parseInt(products.tickets.adult);
  const reducedQuantity = parseInt(products.tickets.reduced);
  const totalQuantity = adultQuantity + reducedQuantity;

  const lineItems = [
    {
      price_data: {
        currency: "inr",
        product_data: {
          name: "Tickets",
          description: `Date: ${products.date}, Time: ${products.time}`,
          images: [products.images], // 'images' instead of 'image'
        },
        unit_amount: products.price * 100,
      },
      quantity: totalQuantity,
    },
  ];

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ message: "Error creating checkout session" });
  }
});

export default router;
