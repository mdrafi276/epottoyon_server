const express = require('express');
const router = express.Router();
const { unions } = require('../models');

router.get('/', async (req, res) => {
      const allUnions = await unions.findAll()
      res.json(allUnions)
})

module.exports = router