const express = require('express');
const router = express.Router();
const { getDate, saveDate } = require('../services/dateHandler.js');

router.get('/', async function (req, res, next) {
  try {
    res.json(await getDate());
  } catch (err) {
    console.error(`Error while getting date `, err.message);
    next(err);
  }
});

router.post('/', async function (req, res, next) {
  try {
    res.json(await saveDate());
  } catch (err) {
    console.error(`Error while saving date `, err.message);
    next(err);
  }
});

module.exports = router;
