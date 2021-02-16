import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import emailReducer from '../features/email/emailSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    email: emailReducer
  },
});
