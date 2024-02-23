import { configureStore } from '@reduxjs/toolkit';
import storyFormReducer from '../features/storyFormSlice';
import searchConditionReducer from '../features/searchConditionSlice';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist'; // Import the persistReducer and persistStore functions
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Use the persistReducer function to combine the root reducer with the storage configuration
const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	storyForm: storyFormReducer,
	search: searchConditionReducer,
});

// Combine the reducers into a single reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	search: searchConditionReducer,
});

// Export the store and persistor
export const persistor = persistStore(store);
