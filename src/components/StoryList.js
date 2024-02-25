import React from 'react';
import { useSelector } from 'react-redux';

const StoryList = () => {
  // Use useSelector to access the stories from the Redux store
  const stories = useSelector((state) => state.storyForm.stories);

  return (
    <div className="story-list">
      <h2>Submitted Stories</h2>
      <div className="story-grid">
        {stories.length > 0 ? (
          stories.map((story, index) => (
            <div key={index} className="story-card">
              <h3>{story.title}</h3>
              <p>{story.content}</p>
              <small>Submitted by: {story.name}</small>
            </div>
          ))
        ) : (
          <p>No stories have been submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default StoryList;

