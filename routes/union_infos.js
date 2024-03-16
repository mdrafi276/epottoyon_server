const express = require("express");
const router = express.Router();
const { union_infos } = require("../models");

router.get("/", async (req, res) => {
    const allUnions = await union_infos.findAll();
    res.json(allUnions);
});

module.exports = router;
