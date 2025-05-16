import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Scan from './Scan';

const App = () => {
  return (
    <Router>
      <div className="bg-blue-700 p-4 text-white flex justify-center gap-10">
        <Link to="/" className="hover:underline">🏷 Register</Link>
        <Link to="/scan" className="hover:underline">📷 Scan QR</Link>
      </div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>
    </Router>
  );
};

export default App;
