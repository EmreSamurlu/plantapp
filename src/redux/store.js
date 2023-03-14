import {combineReducers, configureStore} from '@reduxjs/toolkit';

const combineReducer = combineReducers({});

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
