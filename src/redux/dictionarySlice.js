import { createSlice } from '@reduxjs/toolkit';

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: [],
  reducers: {
    addToDictionary(state, action) {
      state.push(action.payload);
    },
    removeFromDictionary(state, action) {
      const index = state.findIndex(item => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addToDictionary, removeFromDictionary } = dictionarySlice.actions;
export const dictionaryReduser = dictionarySlice.reducer;
