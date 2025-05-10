// backend/models/Attendance.js
const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', AttendanceSchema);
