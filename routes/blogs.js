const express = require("express");
const router = express.Router();
const { blogs } = require("../models");
const { where } = require("sequelize");

router.get("/", async (req, res) => {
    const allBlogs = await blogs.findAll();
    res.json(allBlogs);
});

router.get("/get-type-by-id", async (req, res) => {
    const { id } = req.query;

    try {
        const certificate = await blogs.findOne({
            where: { id },
            attributes: ["description"],
        });
        res.json(certificate);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching the certificate.",
        });
    }
});
module.exports = router;
