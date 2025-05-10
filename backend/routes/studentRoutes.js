// backend/routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const QRCode = require('qrcode');

// Add new student
router.post('/', async (req, res) => {
  const { name, studentId } = req.body;
  try {
    const qrCode = await QRCode.toDataURL(studentId);
    const student = new Student({ name, studentId, qrCode });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
