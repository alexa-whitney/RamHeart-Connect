import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StoryForm from './StoryForm';

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <main className="main-content">
        <h1 className="welcome-title">Welcome to RamHeart Connect</h1>
        <p className="welcome-description">
          Your central hub for congenital heart defect support and resources.
        </p>

        {/* Introduction or About Section */}
        <section className="about-section">
          <h2>About RamHeart Connect</h2>
          <p>
            RamHeart Connect is a community-driven platform dedicated to supporting
            families and individuals affected by congenital heart defects (CHD). Here,
            you can find the latest research, treatment options, and connect with others
            on the same journey.
          </p>
        </section>

        {/* Features or Services Section */}
        <section className="features-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Interactive guides for understanding CHD</li>
            <li>Personal stories and experiences from our community</li>
            <li>A directory of healthcare providers specializing in CHD</li>
            <li>Latest news and updates on CHD research</li>
          </ul>
        </section>

        {/* Call to Action or Engagement Section */}
        <section className="cta-section">
          <h2>Join Our Community</h2>
          <p>
            Share your story, connect with others, and find support.
            Together, we're stronger.
          </p>
        </section>

        <section className="story-submission-section">
          <h2>Share Your Story</h2>
          <StoryForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
