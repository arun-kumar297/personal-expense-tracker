import express from "express";
import Category from "../models/category.model.js";

const router = express.Router();

// Add a new category
router.post("/", async (req, res) => {
  const category = req.body;

  if (!category.name || !category.type) {
    res
      .status(400)
      .json({ success: false, message: "Please provide all details" });
  }

  const newCategory = new Category(category);
  try {
    await newCategory.save();
    res.status(201).json({ success: true, data: newCategory });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: true, error: error.message });
  }
});

export default router;
