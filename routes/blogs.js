const express = require('express');
const router = express.Router();
const { blogs } = require('../models');

router.get('/', async (req, res) => {
      const allBlogs = await blogs.findAll();
      res.json(allBlogs);
})

module.exports = router;