const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.static(__dirname + '/../assets'));
router.use(express.static(__dirname + '/../templates'));

router.get('/', (req, res) => {
  res.sendFile('app.html', {root: path.join(__dirname, '../layouts')});
});

module.exports = router;