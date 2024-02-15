import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <main className="main-content">
        <h1 className="welcome-title">Welcome to RamHeart Connect</h1>
        <p className="welcome-description">
          Your hub for congenital heart defect support and resources.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;

