import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import axios from 'axios';

const Scan = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      fps: 10,
      qrbox: 250
    });

    scanner.render(success, error);

    async function success(decodedText) {
      try {
        const res = await axios.post('http://localhost:5000/api/attendance', {
          studentId: decodedText
        });
        alert(`Attendance marked for: ${decodedText}`);
        scanner.clear();
      } catch (err) {
        alert('Failed to mark attendance');
      }
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Scan Student QR Code</h1>
      <div id="reader" className="mx-auto w-full max-w-sm"></div>
    </div>
  );
};

export default Scan;
