import React, { useState } from 'react';

const StoryForm = () => {
	// Create a state variable to hold the form data (via Controlled Component pattern)
  const [story, setStory] = useState({
    name: '',
    email: '',
    title: '',
    content: '',
    consent: false
  });

	// Create a function to handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStory((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

	// Create a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(story);
    // Send `story` to state management
  };

  return (
    <form onSubmit={handleSubmit} className="story-form">
      <input
        type="text"
        name="name"
        value={story.name}
        onChange={handleChange}
        placeholder="Your name or pseudonym"
      />
      <input
        type="email"
        name="email"
        value={story.email}
        onChange={handleChange}
        placeholder="Your email"
      />
      <input
        type="text"
        name="title"
        value={story.title}
        onChange={handleChange}
        placeholder="Story title"
      />
      <textarea
        name="content"
        value={story.content}
        onChange={handleChange}
        placeholder="Your story"
      />
      <label>
        <input
          type="checkbox"
          name="consent"
          checked={story.consent}
          onChange={handleChange}
        />
        I consent to share my story publicly.
      </label>
      <button className= "cta-button" type="submit">Submit Your Story ❤️</button>
    </form>
  );
};

export default StoryForm;

