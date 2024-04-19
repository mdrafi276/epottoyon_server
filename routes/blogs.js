const express = require("express");
const router = express.Router();
const { blogs } = require("../models");

router.get("/", async (req, res) => {
    try {
        const allBlogs = await blogs.findAll();
        res.json(allBlogs);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching the blogs.",
        });
    }
});

router.get("/get-type-by-id", async (req, res) => {
    const { id } = req.query;

    try {
        const certificate = await blogs.findOne({
            where: { id },
            attributes: ["id", "description"],
        });
        res.json(certificate);
    } catch (error) {
        res.status(500).json({
            error: "An error occurred while fetching the certificate.",
        });
    }
});
module.exports = router;
