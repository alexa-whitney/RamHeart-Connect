import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk that will perform the API call
export const fetchConditions = createAsyncThunk(
    'search/fetchConditions',
    async (searchTerm, { rejectWithValue }) => {
        try {
            const encodedSearchTerm = encodeURIComponent(searchTerm);
            console.log(`Fetching data for: ${encodedSearchTerm}`);
            const response = await fetch(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${encodedSearchTerm}`);
            const data = await response.json();
            console.log(data);
  
            // Check if `data[3]` is an array before mapping
            const results = Array.isArray(data[3]) ? data[3].map((item, index) => ({
                display: item[0], // Display string
                // Since `data[2]` is null, we do not try to access its index
                // extraData: data[2] && data[2][index] // Skip this line since data[2] is null
            })) : [];
  
            return results;
        } catch (error) {
            console.error(error);
            return rejectWithValue('Error fetching data');
        }
    }
  );

const searchConditionSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
        results: [],
        error: null,
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConditions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchConditions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.results = action.payload;
                state.error = null;
            })
            .addCase(fetchConditions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { setSearchTerm } = searchConditionSlice.actions;

export default searchConditionSlice.reducer;
