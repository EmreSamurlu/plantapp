import {createSlice} from '@reduxjs/toolkit';

import initialState from './initialState';
import getQuestionsThunk from './thunks/getQuestionsThunk';

export default createSlice({
  name: 'getQuestions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getQuestionsThunk.pending, state => {
        state.questionsLoading = true;
      })
      .addCase(getQuestionsThunk.fulfilled, (state, action) => {
        state.questionsLoading = false;
        state.questions = action.payload;
      })
      .addCase(getQuestionsThunk.rejected, (state, action) => {
        state.questionsLoading = false;
        state.questionsError = action.error;
      });
  },
});
