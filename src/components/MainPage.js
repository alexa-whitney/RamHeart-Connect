import React from 'react';
import { Link } from 'react-scroll';
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


        {/* About Section */}
        <section id="about-section" className="about-section">
          <p>
          RamHeart Connect is a community-driven platform dedicated to supporting families 
          and individuals affected by congenital heart defects (CHD). Explore our 'Search 
          Medical Conditions' for the latest research and treatment options. Navigate our 
          'Resource Directory' for valuable support groups and healthcare facilities. Browse 
          'Story List' to read shared experiences, and if you're moved to share your own 
          journey, the 'Share Your Story' form is a click away.
          </p>
          <Link to="share-story-section" className="share-story-link" smooth={true} duration={500}>Share Your Story ❤️</Link>
        </section>

        {/* Search Section */}
        <section id="search-section" className="search-section">
          <img src={WithLoveSvg} alt="Search Medical Conditions" className="illustration" />
          <h2>Search Medical Conditions</h2>
          <p>
            Find information on specific congenital heart defects and related conditions
            to better understand the diagnosis and treatment options.
          </p>
          <DisplayMedicalCondition />
        </section>

        {/* Resource Directory Section */}
        <section id="directory-section" className="directory-section">
          <h2>Resource Directory</h2>
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
