const express = require('express');
const router = express.Router();
const { districts } = require('../models');

router.get('/', async (req, res) => {
      const { divisionId } = req.query;
      const matchedDistricts = await districts.findAll({
            where: {
                  division_id: divisionId
            }
      });
      res.json(matchedDistricts);
})

module.exports = router