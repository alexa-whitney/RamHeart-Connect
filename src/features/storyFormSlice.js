import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  title: '',
  content: '',
  consent: false,
  // Add additional state related to submission status, errors, etc.
};

const storyFormSlice = createSlice({
  name: 'storyForm',
  initialState,
  reducers: {
    updateField(state, action) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    // Add other reducers for submission, reset, etc.
  },
});

export const { updateField } = storyFormSlice.actions;
export default storyFormSlice.reducer;
