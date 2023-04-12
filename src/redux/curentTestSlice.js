import { createSlice } from '@reduxjs/toolkit';

export const currentTestSlice = createSlice({
  name: 'currentTest',
  initialState: {
    testItems:[],
    currentQuestion: null,
    currentScore: 0,
  },
  reducers: {

  },
});

// export const {  } = currentTestSlice.actions;
export const currentTestReduser = currentTestSlice.reducer;
