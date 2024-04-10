import express from "express";
import {
  createImages,
  getImages,
  getOnlyImage,
  getPopular,
} from "../controllers/imageController.js";

const router = express.Router();

router.post("/scroller", createImages);
router.get("/scroller", getImages);
router.get("/singleImage/:id", getOnlyImage);
router.get("/popular/:id", getPopular);

export default router;
