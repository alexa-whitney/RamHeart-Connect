import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk that will perform the API call
export const fetchConditions = createAsyncThunk(
    'search/fetchConditions',
    async (searchTerm, { rejectWithValue }) => {
        try {
            const encodedSearchTerm = encodeURIComponent(searchTerm);
            console.log(`Fetching data for: ${encodedSearchTerm}`);
            const response = await fetch(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${encodedSearchTerm}&ef=term_icd9_text,info_link_data`);
            const data = await response.json();
            console.log(data);

            // Ensure the correct structure in the response to avoid runtime errors
            if (!Array.isArray(data) || data.length < 4) {
                throw new Error('Unexpected response structure');
            }

            // Map over the results to create a new array of objects with the desired data
            const results = data[3].map((item, index) => ({
                name: item[0], // Extract the name of the condition
                links: data[2]?.info_link_data[index] // Extract info links
            }));

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
