const express = require("express");
const router = express.Router();
const { oarishes } = require("../models");

router.get("/", async (req, res) => {
    const allOarishes = await oarishes.findAll();
    res.json(allOarishes);
});

router.post("/add-oarishes", async (req, res) => {
    try {
        const newOarishes = req.body;

        const result = await oarishes.create(newOarishes);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error adding oarishes:", error);
        res.status(500).json({ error: "Failed to add oarishes" });
    }
});

module.exports = router;
