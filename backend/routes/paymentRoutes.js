import express from "express";
import Stripe from "stripe";
import authenticateJWT from "../utils/authenticateJWT.js";

const router = express.Router();
const stripe = new Stripe(
  "sk_test_51KaimASI6i4F9vZj7kLYhduPufxAxRcXDFick0u7DO9YD6vP7zcqgRKnlVY9lQ8HfBU75n3CSQJvOnjuLJ4upET5004CaT4CGE"
);

router.post("/create-checkout-session", authenticateJWT, async (req, res) => {
  try {
    // console.log("Request to /create-checkout-session received");
    // console.log("Request body:", req.body);

    const { products, userId, metadata } = req.body;

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
            images: [products.images],
          },
          unit_amount: products.price * 100,
        },
        quantity: totalQuantity,
      },
    ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata,
    });

    // console.log("Stripe session created:", session.id);
    res.json({ sessionId: session.id }); // Ensure you're returning `sessionId` in the JSON response
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ message: "Error creating checkout session" });
  }
});

export default router;
