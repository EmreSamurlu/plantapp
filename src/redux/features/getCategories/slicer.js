import {createSlice} from '@reduxjs/toolkit';

import initialState from './initialState';
import getCategoriesThunk from './thunks/getCategoriesThunk';

export default createSlice({
  name: 'getCategories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCategoriesThunk.pending, state => {
        state.categoriesLoading = true;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.categoriesLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.categoriesLoading = false;
        state.categoriesError = action.error;
      });
  },
});
