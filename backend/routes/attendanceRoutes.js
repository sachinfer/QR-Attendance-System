const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

router.post('/', async (req, res) => {
  const { studentId } = req.body;
  try {
    const attendance = new Attendance({ studentId });
    await attendance.save();
    res.status(201).json({ message: "Attendance marked" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
