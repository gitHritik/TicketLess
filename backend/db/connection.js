import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DB = process.env.DATABASE;

const connections = mongoose
  .connect(DB)
  .then(() => console.log("database connected"))
  .catch((err) => console.log("errr", err));

export default connections;
