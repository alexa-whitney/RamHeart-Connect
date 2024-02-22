import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentEntry: {
    name: '',
    email: '',
    title: '',
    content: '',
    consent: false,
  },
  stories: [] // This array will hold all submitted stories
  
};

const storyFormSlice = createSlice({
  name: 'storyForm',
  initialState,
  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    // Reducer for submission
    submitStory(state) {
      // Check for consent before adding the story to the array
      if (state.currentEntry.consent) {
        state.stories.push(state.currentEntry);
        // Reset currentEntry after submission
        state.currentEntry = initialState.currentEntry;
      } else {
        // Handle the case where consent is not given
        console.error("Consent not given for story submission");
      }
    }
  },
});

export const { updateField, submitStory } = storyFormSlice.actions;
export default storyFormSlice.reducer;
