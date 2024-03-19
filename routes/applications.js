const express = require("express");
const router = express.Router();
const { applications } = require("../models");

router.get("/", async (req, res) => {
    try {
        const allApplications = await applications.findAll({
            where: { sanad_id: 1 },
            // offset: 3500,
            limit: 10,
        });
        res.json(allApplications);
    } catch (error) {
        console.error("Error fetching applications:", error);
        res.status(500).json({ error: "Failed to fetch applications" });
    }
});

router.post("/add-certificate", async (req, res) => {
    try {
        const newCertificate = req.body;
        const result = await applications.create(newCertificate);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error adding certificate:", error);
        res.status(500).json({ error: "Failed to add certificate" });
    }
});

module.exports = router;
