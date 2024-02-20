import { configureStore } from '@reduxjs/toolkit';
import storyFormReducer from '../features/storyForm/storyFormSlice';

export const store = configureStore({
  reducer: {
    // Add reducers here
    storyForm: storyFormReducer,
  },
});