const express = require("express");
const router = express.Router();
const { districts } = require("../models");
const { where } = require("sequelize");

router.get("/", async (req, res) => {
    try {
        const { divisionId } = req.query;
        const matchedDistricts = await districts.findAll({
            where: {
                division_id: divisionId,
            },
        });
        res.json(matchedDistricts);
    } catch (error) {
        console.error("Failed to fetch districts:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/get-name-by-id", async (req, res) => {
    try {
        const { id } = req.query;

        const district = await districts.findOne({
            where: { id },
            attributes: ["id", "name", "bn_name"],
        });
        res.json(district);
    } catch (error) {
        console.error("Failed to fetch district names:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
