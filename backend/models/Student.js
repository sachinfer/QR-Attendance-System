// backend/models/Student.js
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  studentId: { type: String, required: true, unique: true },
  qrCode: { type: String }, // Will hold QR code URL or base64
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);
