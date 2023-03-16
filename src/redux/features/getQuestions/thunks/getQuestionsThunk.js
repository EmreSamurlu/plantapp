import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {questionsEndpoint} from '../../../endpoints/endpoints';

export default createAsyncThunk(
  'getQuestions/getQuestionsThunk',
  async payload => {
    const response = await axios({
      method: 'GET',
      url: questionsEndpoint,
    });
    if (response.status === 200) {
      return response.data;
    }
  },
);
