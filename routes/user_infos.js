const express = require("express");
const router = express.Router();
const { user_infos } = require("../models");

router.get("/", async (req, res) => {
    try {
        const allInfos = await user_infos.findAll();
        res.send(allInfos);
    } catch (error) {
        console.error("Error getting user_infos:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
