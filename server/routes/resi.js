const express = require('express');

const { getResi, createResi } = require('../controllers/resi');

const router = express.Router();

router.get('/', getResi);
router.post('/', createResi);

module.exports = router;