const db = require('../db.js');

async function getDate() {
  const data = await db.query("SELECT Date FROM Next_meeting");

  return { data };
}

async function saveDate() {
  const data = await db.query('INSERT INTO Next_meeting SET ?', { Date: 2022 - 08 - 01 });

  return { data };
}

module.exports = {
  saveDate,
  getDate
}
