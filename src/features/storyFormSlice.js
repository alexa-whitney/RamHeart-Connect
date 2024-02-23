import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentEntry: {
    name: '',
    email: '',
    title: '',
    content: '',
    consent: false,
  },
  stories: [], // This array will hold all submitted stories
  error: null, // Handle error messages

};

const storyFormSlice = createSlice({
  name: 'storyForm',
  initialState,
  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload;
      // Correctly address the nested `currentEntry` structure
      state.currentEntry[field] = value;
    },
    // Reducer for submission
    submitStory(state) {
      // Check for consent before adding the story to the array
      if (state.currentEntry.consent) {
        state.stories.push({ ...state.currentEntry }); // Spread to avoid direct state mutation
        // Reset currentEntry after submission
        state.currentEntry = { ...initialState.currentEntry }; // Reset the form fields
        state.error = null; // Reset the error state
      } else {
        // Handle the case where consent is not given
        state.error = "Consent must be approved before the story can be published.";
      }
    }
  },
});

export const { updateField, submitStory } = storyFormSlice.actions;
export default storyFormSlice.reducer;
