const express = require("express");
const router = express.Router();
const { unions } = require("../models");
const { where } = require("sequelize");

router.get("/", async (req, res) => {
    const { upazillaId } = req.query;

    const matchedUnions = await unions.findAll({
        where: {
            upazilla_id: upazillaId,
        },
    });

    res.json(matchedUnions);
});

router.get("/get-name-by-id", async (req, res) => {
    const { id } = req.query;

    try {
        const union = await unions.findOne({
            where: { id },
            attributes: ["id", "name", "bn_name", "upazilla_id"],
        });

        if (!union) {
            return res.status(404).json({ message: "Union not found" });
        }

        res.json(union);
    } catch (error) {
        console.error("Error fetching union:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
