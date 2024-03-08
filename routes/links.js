const express = require("express");
const router = express.Router();
const { links } = require("../models");

router.get("/", async (req, res) => {
      const listOfLinks = await links.findAll();
      res.json(listOfLinks);
});

module.exports = router;
