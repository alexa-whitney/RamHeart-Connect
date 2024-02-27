import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StoryForm from './StoryForm';
import StoryList from './StoryList';
import DisplayMedicalCondition from './DisplayMedicalCondition';
import ResourceDirectory from './ResourceDirectory';
import SpeakHeartSvg from '../images/speak_heart.svg';
import WithLoveSvg from '../images/undraw_with_love_red.svg';

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <main className="main-content">
        <section id="welcome-section" className="welcome-section">
          <h1 className="welcome-title">Welcome to RamHeart Connect</h1>
          <p className="welcome-description">
            Your central hub for congenital heart defect support and resources.
          </p>
        </section>

        {/* About Section */}
        <section id="about-section" className="about-section">
          <h2>About RamHeart Connect</h2>
          <p>
            RamHeart Connect is a community-driven platform dedicated to supporting
            families and individuals affected by congenital heart defects (CHD). Here,
            you can find the latest research, treatment options, and connect with others
            on the same journey.
          </p>
        </section>

        {/* Search Section */}
        <section id="search-section" className="search-section">
          <img src={WithLoveSvg} alt="Search Medical Conditions" className="illustration" />
          <h2>Search Medical Conditions</h2>
          <p>
            Find information on specific congenital heart defects and related conditions
            to better understand the diagnosis and treatment options. The information is
            provided by the National Institute of Health's National Library of Medicine.
          </p>
          <DisplayMedicalCondition />
        </section>

        {/* Resource Directory Section */}
        <section id="directory-section" className="directory-section">
          {/* Fine helpful Facebook support groups, notable hospitals, and other online support resources */}
          <h2>Resource Directory</h2>
          <p>
            Find helpful Facebook support groups, notable hospitals, and other online support resources.
          </p>
          <ResourceDirectory />
        </section>

        {/* Stories Section */}
        <section id="stories-section" className="story-submission-section">
          <StoryList />
        </section>

        {/* Share Your Story Section */}
        <section id="share-story-section" className="share-story-section">
          <img src={SpeakHeartSvg} alt="Share Your Story" className="illustration" />
          <h2>Share Your Story</h2>
          <StoryForm />
        </section>

        {/* Contact Us Section */}
        <section id="contact-section" className="contact-section">
          <h2>Join Our Community</h2>
          <p>
            Share your story, connect with others, and find support.
            Together, we're stronger.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
