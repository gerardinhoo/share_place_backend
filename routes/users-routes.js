const express = require("express");

const router = express.Router();

router.get('/users', (req, res) => {
  console.log('GET request in User');
  res.json({msg: 'User works!'})
})


module.exports = router;