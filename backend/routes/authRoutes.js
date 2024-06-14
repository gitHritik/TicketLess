import express from "express";
import passport from "passport";
import axios from "axios";
import User from "../models/userSchema.js";
import generateToken from "../utils/generateToken.js";
import dotenv from "dotenv";
import authenticateJWT from "../utils/authenticateJWT.js";

dotenv.config();

const router = express.Router();

// Authenticate the user using Google
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: `${process.env.CLIENT_URL}/login/failed`,
  })
);

// Forward the request to Google's authentication server
router.get("/google", async (req, res) => {
  try {
    const response = await axios.get(
      "https://accounts.google.com/o/oauth2/v2/auth",
      {
        params: req.query,
      }
    );
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Register or login user to DB
router.get("/login/success", async (req, res) => {
  console.log("req.user:", req.user);
  if (req.user) {
    let userExists = await User.findOne({ email: req.user._json.email });
    if (userExists) {
      generateToken(userExists._id, res);
    } else {
      const newUser = new User({
        name: req.user._json.name,
        email: req.user._json.email,
        password: Date.now(),
      });
      userExists = await newUser.save();
      generateToken(userExists._id, res);
    }

    res.status(200).json({
      user: { ...req.user },
      message: "Successfully logged in",
      _id: userExists._id,
    });
  } else {
    res.status(403).json({
      message: "Not Authorized",
    });
  }
});
// Login failed
router.get("/login/failed", (req, res) => {
  res.status(401);
  throw new Error("Login Failed");
});

router.get("/validate-token", authenticateJWT, (req, res) => {
  res.status(200).send({ userId: req.userId });
});

// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
    }
    // Clear the cookie with matching options
    // res.clearCookie("auth_token", {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "Strict",
    // });
    res.redirect("/");
  });
});

export default router;
