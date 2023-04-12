import { createSelector } from '@reduxjs/toolkit';
export const selectDictionary = state => state.dictinary;
export const selectCurrentTest = state => state.currentTest;
export const selectCurrentQuestion = state => state.currentQuestion;
export const selectCurrentScore = state => state.currentScore;
export const selectTestHistory = state => state.testHistory;

// export const selectRandomWords = createSelector(
//   [selectDictionary],
//   (dictinary,) => {
//     const WORDSLENGTH = 10;

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(value.toLowerCase().trim())
//     );
//   }
// );
