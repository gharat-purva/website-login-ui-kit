import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage1 from './LoginPage1';
import LoginPage2 from './LoginPage2';
import LoginPage3 from './LoginPage3';
import LoginPage4 from './LoginPage4';
import LoginPage5 from './LoginPage5';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login1" element={<LoginPage1 />} />
        <Route path="/login2" element={<LoginPage2 />} />
        <Route path="/login3" element={<LoginPage3 />} />
        <Route path="/login4" element={<LoginPage4 />} />
        <Route path="/login5" element={<LoginPage5 />} />
        <Route path="/" element={<div>Select a login page: /login1, /login2, /login3, or /login4</div>} />
      </Routes>
    </Router>
  );
}

export default App;
