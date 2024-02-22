import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateField, submitStory } from '../features/storyFormSlice';

const StoryForm = () => {
	// Access the currentEntry part of the state for the form fields
	const currentEntry = useSelector((state) => state.storyForm.currentEntry);
	// Use the `useDispatch` hook to retrieve the `dispatch` function from the Redux store
	const dispatch = useDispatch();

	// Function to handle form input changes
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		dispatch(updateField({
			field: name,
			value: type === 'checkbox' ? checked : value,
		}));
	};

	// Function to handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// Dispatch an action to submit the form
		dispatch(submitStory());
	};

	return (
		<form onSubmit={handleSubmit} className="story-form">
			<input
				type="text"
				name="name"
				value={currentEntry.name}
				onChange={handleChange}
				placeholder="Your name or pseudonym"
			/>
			<input
				type="email"
				name="email"
				value={currentEntry.email}
				onChange={handleChange}
				placeholder="Your email"
			/>
			<input
				type="text"
				name="title"
				value={currentEntry.title}
				onChange={handleChange}
				placeholder="Story title"
			/>
			<textarea
				name="content"
				value={currentEntry.content}
				onChange={handleChange}
				placeholder="Your story"
			/>
			<label>
				<input
					type="checkbox"
					name="consent"
					checked={currentEntry.consent}
					onChange={handleChange}
				/>
				I consent to share my story publicly.
			</label>
			<button className="cta-button" type="submit">Submit Your Story ❤️</button>
		</form>
	);
};

export default StoryForm;

