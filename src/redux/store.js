import {combineReducers, configureStore} from '@reduxjs/toolkit';

import getCategoriesReducer from './features/getCategories';
import getQuestionsReducer from './features/getQuestions';

const combineReducer = combineReducers({
  getCategories: getCategoriesReducer,
  getQuestions: getQuestionsReducer,
});

const rootReducer = (state, action) => {
  return combineReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return [
      ...getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
    ];
  },
});

export default store;
