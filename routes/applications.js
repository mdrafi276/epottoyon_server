const express = require("express");
const router = express.Router();
const { applications } = require("../models");

//getting all applications
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

//getting single application
router.get("/application-details", async (req, res) => {
    const { id } = req.query;

    try {
        const application = await applications.findOne({ where: { id } });
        if (!application) {
            return res.status(404).json({ error: "Application not found" });
        }
        res.json(application);
    } catch (error) {
        console.error("Error fetching application:", error);
        res.status(500).json({ error: "Failed to fetch application" });
    }
});

//post api to add certificate
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
