import express from "express";
import "./db/connection.js";
import dotenv from "dotenv";
import passportUtil from "./utils/passport.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import unleaseRoutes from "./routes/unleaseRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import passportUser from "./config/passportUser.js";
import session from "express-session";
import passport from "passport";
import bodyParser from "body-parser";
import bookRoutes from "./routes/bookingRoutes.js";

const app = express();

dotenv.config();
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL
  credentials: true, // Allow credentials
  methods: "GET, POST, PATCH, DELETE, PUT",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

// Initialize Passport

app.use(
  session({
    secret: process.env.SESSION_SECRET, // Use a strong, random secret
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
passportUser();

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    methods: "GET, POST, PATCH, DELETE, PUT",
    credentials: true,
  })
);

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://js.stripe.com"
  );
  next();
});

passportUtil(app);

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/images", imageRoutes);
app.use("/api/images", unleaseRoutes);
app.use("/api", paymentRoutes);
app.use("/api", bookRoutes);

app.listen(5000, () => {
  console.log("Running great!!! on http://localhost:5000");
});
