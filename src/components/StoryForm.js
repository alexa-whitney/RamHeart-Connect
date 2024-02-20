import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateField } from './storyFormSlice';

const StoryForm = () => {
	// Use the `useSelector` hook to retrieve the form data from the Redux store
	const story = useSelector((state) => state.storyForm);
	// Use the `useDispatch` hook to retrieve the `dispatch` function from the Redux store
	const dispatch = useDispatch();

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
		dispatch(updateField({
			field: name,
			value: type === 'checkbox' ? checked : value,
		}));
	};

	// Create a function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// Dispatch an action to submit the form
		dispatch(submitStory(story));
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
			<button className="cta-button" type="submit">Submit Your Story ❤️</button>
		</form>
	);
};

export default StoryForm;

