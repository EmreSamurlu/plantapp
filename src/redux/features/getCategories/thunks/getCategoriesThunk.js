import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import {categoriesEndpoint} from '../../../endpoints/endpoints';

export default createAsyncThunk(
  'getCategories/getCategoriesThunk',
  async payload => {
    const response = await axios({
      method: 'GET',
      url: categoriesEndpoint,
    });
    if (response.status === 200) {
      return response.data;
    }
  },
);
