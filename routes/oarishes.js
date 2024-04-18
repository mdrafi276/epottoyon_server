const express = require("express");
const router = express.Router();
const { oarishes } = require("../models");

router.get("/", async (req, res) => {
    try {
        const allOarishes = await oarishes.findAll();
        res.json(allOarishes);
    } catch (error) {
        console.error("Error retrieving oarishes:", error);
        res.status(500).json({ error: "Failed to retrieve oarishes" });
    }
});

router.post("/add-oarishes", async (req, res) => {
    try {
        const newOarishes = req.body;

        const result = await oarishes.create(newOarishes);
        res.status(201).json(result);
    } catch (error) {}
});

router.get("/details", async (req, res) => {
    try {
        const { applicationId } = req.query;

        const oarishesDetails = await oarishes.findOne({
            where: { application_id: applicationId },
        });
        res.json(oarishesDetails);
    } catch (error) {
        console.error("Error finding oarishe:", error);
        res.status(500).json({ error: "Failed to find oarishe" });
    }
});

module.exports = router;
