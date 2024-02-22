import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const LandingPage = () => {
    const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/main'); // Route to MainPage when the button is clicked
  };

  return (
    <div className="landing-page">
      <div className="heart" onClick={handleEnter}></div>
    </div>
  );
};

export default LandingPage;
