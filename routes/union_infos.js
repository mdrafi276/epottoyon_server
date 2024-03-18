const express = require("express");
const router = express.Router();
const { union_infos } = require("../models");

router.get("/", async (req, res) => {
    const allUnions = await union_infos.findAll({
        //   offset: 125,
    });
    res.json(allUnions);
});

router.post("/add-union", async (req, res) => {
    const newUnion = req.body;
    const result = await union_infos.create(newUnion);
    res.send(result);
});

module.exports = router;
