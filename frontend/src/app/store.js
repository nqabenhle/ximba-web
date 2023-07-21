import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import eventReducer from '../features/events/eventSlice';
import modalReducer from '../features/modal/modalSlice';
import userReducer from '../features/loggedInUser/loggedInUserSlice'

export const store = configureStore({
  reducer: {
    event: eventReducer,
    modal: modalReducer,
    user: userReducer,
  },
  middleware: [thunk],
});
