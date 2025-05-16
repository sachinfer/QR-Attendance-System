import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [students, setStudents] = useState([]);

  const registerStudent = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/students', { name, studentId });
      setStudents(prev => [...prev, res.data]);
      setName('');
      setStudentId('');
    } catch (err) {
      alert('Error registering student');
    }
  };

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:5000/api/students');
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Student QR Registration</h1>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Student ID"
          value={studentId}
          onChange={e => setStudentId(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          onClick={registerStudent}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
        >
          Register & Generate QR
        </button>
      </div>

      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">Registered Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {students.map(s => (
            <div key={s._id} className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold">{s.name}</h3>
              <p className="text-sm text-gray-600">{s.studentId}</p>
              <img src={s.qrCode} alt="QR Code" className="mx-auto mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
