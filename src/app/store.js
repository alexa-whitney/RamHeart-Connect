import { configureStore } from '@reduxjs/toolkit';
import storyFormReducer from '../features/storyFormSlice';
import searchConditionReducer from '../features/searchConditionSlice';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['storyForm'], // Only persist the storyForm slice
};

const rootReducer = combineReducers({
  storyForm: storyFormReducer,
  search: searchConditionReducer, // Search section will not be persisted
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

