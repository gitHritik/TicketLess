import express from "express";
import "./db/connection.js";
import dotenv from "dotenv";
import passportUtil from "./utils/passport.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  next();
});

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    methods: "GET, POST, PATCH, DELETE, PUT",
    credentials: true,
  })
);

dotenv.config();
app.use(cookieParser());
passportUtil(app);

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/images", imageRoutes);

app.listen(5000, () => {
  console.log("Running great!!! on http://localhost:5000");
});
