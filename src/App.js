import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage1 from './LoginPage1';
import LoginPage2 from './LoginPage2';
import LoginPage3 from './LoginPage3';
import LoginPage4 from './LoginPage4';
import LoginPage5 from './LoginPage5';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Select a login page:</h1>
      <button onClick={() => navigate('/login1')} className="m-2 p-2 bg-blue-500 text-white rounded">Login Page 1</button>
      <button onClick={() => navigate('/login2')} className="m-2 p-2 bg-green-500 text-white rounded">Login Page 2</button>
      <button onClick={() => navigate('/login3')} className="m-2 p-2 bg-red-500 text-white rounded">Login Page 3</button>
      <button onClick={() => navigate('/login4')} className="m-2 p-2 bg-purple-500 text-white rounded">Login Page 4</button>
      <button onClick={() => navigate('/login5')} className="m-2 p-2 bg-yellow-500 text-white rounded">Login Page 5</button>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login1" element={<LoginPage1 />} />
        <Route path="/login2" element={<LoginPage2 />} />
        <Route path="/login3" element={<LoginPage3 />} />
        <Route path="/login4" element={<LoginPage4 />} />
        <Route path="/login5" element={<LoginPage5 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
