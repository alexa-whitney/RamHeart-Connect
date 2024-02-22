import React from 'react';
import { useSelector } from 'react-redux';

const StoryList = () => {
  // Use useSelector to access the stories from the Redux store
  const stories = useSelector((state) => state.storyForm.stories);

  return (
    <div className="story-list">
      <h2>Submitted Stories</h2>
      {stories.length > 0 ? (
        <ul>
          {stories.map((story, index) => (
            <li key={index}>
              <h3>{story.title}</h3>
              <p>{story.content}</p>
              <small>Submitted by: {story.name}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No stories have been submitted yet.</p>
      )}
    </div>
  );
};

export default StoryList;
