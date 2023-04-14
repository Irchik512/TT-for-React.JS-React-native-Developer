import { createSelector } from '@reduxjs/toolkit';
import {chooseRandomWords} from "helpers/random"

export const selectDictionary = state => state.dictinary;
export const selectCurrentTest = state => state.currentTest.testItems;
export const selectCurrentQuestion = state => state.currentTest.currentQuestion;
export const selectCurrentScore = state => state.currentTest.currentScore;
export const selectTestHistory = state => state.testHistory;

export const selectRandomWords = createSelector(
  [selectDictionary],
  (dictinary,) => {
    const WORDSLENGTH = 10;

    if (dictinary.length < WORDSLENGTH){
      return [];
    }
    const randomList =  chooseRandomWords(dictinary, WORDSLENGTH);
    const randomLearnList =  randomList.map((obj)=>{
    const answers = chooseRandomWords(randomList, 3).map((item)=> {
      const answersVariant = {    
        [item.translation]: false
      }
      return answersVariant
    });
    answers.push({[obj.translation]: true});
    const newObj = {...obj, answers, };
  return newObj
  })
   return randomLearnList
  }
);
