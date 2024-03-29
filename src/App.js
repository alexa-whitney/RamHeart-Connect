import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import './index.css';

function App() {
  const repoName = '/RamHeart-Connect';

  return (
    <Router basename={repoName}>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
