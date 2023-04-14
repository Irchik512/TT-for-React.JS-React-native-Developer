import { createSlice } from '@reduxjs/toolkit';

export const currentTestSlice = createSlice({
  name: 'currentTest',
  initialState: {
    testItems: [],
    currentQuestion: null,
    currentScore: 0,
  },
  reducers: {
    startTest(state, action) {
     state.testItems = action.payload;
     state.currentQuestion = state.testItems[0];
    },
    setCurrentQuestion(state,action) {
      state.currentQuestion = action.payload;
    },
    updateScore(state, action) {
      state.currentQuestion = state.action.payload;
      // state.currentScore = state;

    }
    
  },
});

export const {startTest, setCurrentQuestion} = currentTestSlice.actions;
export const currentTestReduser = currentTestSlice.reducer;
