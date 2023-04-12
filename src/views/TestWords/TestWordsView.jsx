import Sections from "components/Section/Section";
import { useSelector} from 'react-redux';
import {selectRandomWords} from 'redux/selectors'
export default function TestWordsView() {
 const learnList = useSelector(selectRandomWords);
  console.log(learnList);
 return(
    <Sections>
      <ul>
        {learnList.map(
          item => {
            const{wordToLearn, id, answers} = item;
            return(
              <li key={id}>
                <form>
                    {'choose the correct translation of the word' + wordToLearn}
                  <div>
                    {answers.map((variant, index) =>{
                        const variable = Object.keys(variant);
                      return (
                        <label key={index}>
                        <input type="radio" name="variants" value={variable}></input>
                        {variable}
                      </label>
                      )
                      }
                    )}
                    </div>
                  <button type="submit" >
                    Next
                  </button>
                </form>
              </li>
              )
            }
          )}
      </ul>
      <div>
        <p>
    
        </p>
        <div>

        </div>
        <button type="button">
           Next
        </button>
      </div>
    </Sections>
      
  )
};