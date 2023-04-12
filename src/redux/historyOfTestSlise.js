import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'testHistory',
  initialState: [],
  reducers: {
    addToHastory(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addToHistory } = historySlice.actions;
export const historyReduser = historySlice.reducer;
