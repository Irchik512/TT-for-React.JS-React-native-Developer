import Sections from "components/Section/Section";
import Notification from 'components/Notification/Notification'
import {useRef , useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {selectRandomWords, selectCurrentQuestion, selectDictionary, selectCurrentTest} from 'redux/selectors';
import {startTest, setCurrentQuestion} from 'redux/curentTestSlice';
import { Button, Test, TestForm, AnswerWrap, Answer } from "./TestWordsViewStyled";

export default function TestWordsView() {
  const dispatch = useDispatch();
  const testFoarmRef = useRef(null);
  const startButtonRef = useRef(null);
  const learnList = useSelector(selectDictionary);
  const getRandomList = useSelector(selectRandomWords);
  // const iteratorList = useSelector(selectCurrentTest)[Symbol.iterator]();
  const value = useSelector(selectCurrentQuestion);
  const [answer, setAnswer] = useState(null);
console.log( value)
  const handleClik = (e) => {
    e.preventDefault();

    dispatch(startTest(getRandomList));
    // dispatch(setCurrentQuestion(iteratorList.next()))
    startButtonRef.current.style.display = 'none';
    testFoarmRef.current.style.display = 'block';
  };
  const handlChange = e => setAnswer(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setCurrentQuestion(getRandomList[1]))
    // dispatch(setCurrentQuestion(iteratorList.next()))
    const newTestForHistoryObject =  ()=> {

    //   ...value,
    // //   if (answer ===  question.translation) {  
    // //   },
    //   answers: answer,
      //   ansver: e.elements.checed
    };

    console.log(newTestForHistoryObject);
    // dispatch(addToHistory(newTestHistoryObject));
  };
  
  return(
    <Sections>
      {learnList.length < 10 ? (
      <Notification message="There is no enough word to test! Add a few words to dictionary.  " />
      ) : (
        <>
          <Button ref={startButtonRef}type="button" onClick= {handleClik}>
            Start Test
          </Button>
          <Test ref={testFoarmRef} >
            <TestForm onSubmit={handleSubmit}>
              Choose the correct translation of the word {value.wordToLearn}
              <AnswerWrap>
                {value.answers.map((variant, index) => {
                  const variable = Object.keys(variant);
                  return (
                    <Answer key={index}>
                      <input
                        type="radio"
                        name="chousenAnswer"
                        value={variable}
                        onChange={handlChange}
                      ></input>
                      {variable}
                    </Answer>
                  );
                })}
              </AnswerWrap>
              <Button type="submit">Next</Button>
            </TestForm>
          </Test>
        </>
      )} 
    </Sections>
  )
};