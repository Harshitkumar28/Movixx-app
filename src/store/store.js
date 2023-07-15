// for redux here
import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './homeSlice';

export const store = configureStore({
  reducer : {
    home : homeSlice,
  }
})  // now store get created

// console.log(store.getState()); // just checking the initial state
