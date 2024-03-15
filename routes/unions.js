const express = require('express');
const router = express.Router();
const { unions } = require('../models');

router.get('/', async (req, res) => {
      const {upazillaId} = req.query;

      const matchedUnions = await unions.findAll({
            where: {
                  upazilla_id: upazillaId
            }
      })

      res.json(matchedUnions)
})

module.exports = router