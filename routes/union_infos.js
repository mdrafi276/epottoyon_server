const express = require("express");
const router = express.Router();
const { union_infos } = require("../models");
const { where } = require("sequelize");

router.get("/", async (req, res) => {
    try {
        const allUnions = await union_infos.findAll();
        res.json(allUnions);
    } catch (error) {
        res.status(500).send("Failed to retrieve unions");
    }
});

router.post("/add-union", async (req, res) => {
    try {
        const newUnion = req.body;
        const result = await union_infos.create(newUnion);
        res.send(result);
    } catch (error) {
        res.status(500).send("Failed to add new union");
    }
});

router.get("/users-union", async (req, res) => {
    try {
        const { userId } = req.query;
        const union = await union_infos.findOne({
            where: { user_id: userId },
        });
        if (!union) {
            res.status(404).send("Union not found");
        } else {
            res.send(union);
        }
    } catch (error) {
        res.status(500).send("Failed to retrieve union information");
    }
});

router.get("/get-for-pdf", async (req, res) => {
    try {
        const { id } = req.query;
        const unionInfo = await union_infos.findOne({
            where: { union_id: id },
            attributes: ["id", "union_id", "user_id", "chairman", "che"],
        });

        res.json(unionInfo);
    } catch (error) {
        res.status(500).send("Failed to retrieve union information");
    }
});

module.exports = router;
