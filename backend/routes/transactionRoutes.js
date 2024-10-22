import express from "express";
import mongoose from "mongoose";
import Transaction from "../models/transaction.model.js";

const router = express.Router();

//Create New Transaction
router.post("/", async (req, res) => {
  const transaction = req.body;

  if (
    !transaction.type ||
    !transaction.category ||
    !transaction.amount ||
    !transaction.date ||
    !transaction.description
  ) {
    res
      .status(400)
      .json({ success: false, message: "Please provide all details" });
  }

  const newTransaction = new Transaction(transaction);

  try {
    await newTransaction.save();
    res.status(201).json({ success: true, data: newTransaction });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

//Get all transaction details
router.get("/", async (req, res) => {
  try {
    const transactionDetails = await Transaction.find();
    res.status(200).json({ success: true, data: transactionDetails });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

//Get transaction details by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      res.status(404).json({ success: false, error: error.message });
    }
    res.status(200).json({ success: true, data: transaction });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

//update transaction
router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const transaction = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ success: false, message: "Invalid transaction Id" });
  }

  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      transaction,
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedTransaction });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

//delete transaction
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Transaction.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Transaction deleted..." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

//summary of transaction
router.get("/summary", async (req, res) => {
  try {
    const { category } = req.query;

    // Initialize filter object
    let filter = {};

    // If category is provided, filter by category
    if (category) {
      filter.category = category;
    }
    const transactions = await Transaction.find(filter);

    let totalIncome = 0;
    let totalExpense = 0;

    // Loop through transactions and calculate totals
    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        totalIncome += transaction.amount;
      } else if (transaction.type === "expense") {
        totalExpense += transaction.amount;
      }
    });

    const balance = totalIncome - totalExpense;

    res.status(200).json({
      totalIncome,
      totalExpense,
      balance,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
