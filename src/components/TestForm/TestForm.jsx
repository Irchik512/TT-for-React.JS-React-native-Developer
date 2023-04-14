// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { TestForm, Button, AnswerWrap, Answer } from './TestForm.styled';
// import { selectCurrentQuestion, selectCurrentTest } from 'redux/selectors';
// import { setCurrentQuestion } from 'redux/curentTestSlice';
// import { useEffect } from 'react';

// export default function TestedForm() {
//     const iteratorList = useSelector(selectCurrentTest)[Symbol.iterator]();
//     const {done, value} = useSelector(selectCurrentQuestion);
//     const [answer, setAnswer] = useState(null);
//   const dispatch = useDispatch();

//   const handlChange = e => setAnswer(e.target.value);
// console.log(value)
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(e);
//     const newTestForHistoryObject = {
//       ...value,
//     //   if (answer ===  question.translation) {
        
//     //   },
//       answers: answer,
//       //   ansver: e.elements.checed
//     };

//     console.log(newTestForHistoryObject);
//     // dispatch(addToHistory(newTestHistoryObject));
//   };
//   useEffect(() => {
//     dispatch(setCurrentQuestion(iteratorList.next()))
  

//   }, [])
  

//   return (
   
//   );
// }
