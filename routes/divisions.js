const express = require("express");
const router = express.Router();
const { divisions } = require("../models");

router.get("/", async (req, res) => {
      const allDivisions = await divisions.findAll();
      res.json(allDivisions);
});

module.exports = router;
