import { configureStore } from '@reduxjs/toolkit';
import storyFormReducer from '../features/storyFormSlice';

export const store = configureStore({
  reducer: {
    storyForm: storyFormReducer,
  },
});