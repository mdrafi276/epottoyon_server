const express = require("express");
const router = express.Router();
const { upzillas } = require("../models");

router.get("/", async (req, res) => {
    try {
        const { districtId } = req.query;
        const matchedUpzillas = await upzillas.findAll({
            where: {
                district_id: districtId,
            },
        });
        res.json(matchedUpzillas);
    } catch (error) {
        console.error("Failed to fetch upzillas:", error);
        res.status(500).send("An error occurred while fetching the upzillas.");
    }
});

router.get("/get-name-by-unionId", async (req, res) => {
    try {
      const {unionId} = req.query;
      const upzilla = await upzillas.findOne({
            
      })
    } catch (error) {
        console.error("Failed to fetch upzilla names:", error);
        res.status(500).send("An error occurred while fetching the upzilla names.");
    }
});

module.exports = router;
