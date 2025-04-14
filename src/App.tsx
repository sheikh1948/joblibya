import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { DevBanner } from './components/DevBanner';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <DevBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;