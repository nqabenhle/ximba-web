import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import eventReducer from '../features/events/eventSlice';
import modalReducer from '../features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    event: eventReducer,
    modal: modalReducer,
  },
  middleware: [thunk],
});
