const express = require("express");
const router = express.Router();
const { applications } = require("../models");

//getting all applications
const PAGE_SIZE = 10;

router.get("/", async (req, res) => {
    try {
        let { page } = req.query;
        page = parseInt(page) || 1;

        const offset = (page - 1) * PAGE_SIZE;

        const allApplications = await applications.findAndCountAll({
            offset: offset,
            limit: PAGE_SIZE,
        });

        const totalPages = Math.ceil(allApplications.count / PAGE_SIZE);

        res.json({
            page: page,
            totalPages: totalPages,
            applications: allApplications.rows,
        });
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
