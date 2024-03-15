const express = require('express');
const router = express.Router();
const { upzillas } = require('../models');

router.get('/', async (req, res) => {
      const { districtId } = req.query
      const matchedUpzillas = await upzillas.findAll({
            where: {
                  district_id: districtId
            }
      })

      res.json(matchedUpzillas)
})

module.exports = router