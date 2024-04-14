import express from "express";
import {
  createImages,
  getByPopularity,
  getImages,
  getImagesByCategory,
  getOnlyImage,
  getPopular,
} from "../controllers/unleaseController.js";

const router = express.Router();

router.post("/unlease", createImages);
router.get("/unlease", getImages);
router.get("/singleImageUnlease/:id", getOnlyImage);
router.get("/popularUnlease/:id", getPopular);
router.get("/unlease/:category", getImagesByCategory);
router.get("/:popularity", getByPopularity);

export default router;
