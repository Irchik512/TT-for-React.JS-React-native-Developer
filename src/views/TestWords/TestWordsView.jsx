import Sections from "components/Section/Section";
import { useSelector} from 'react-redux';
import {selectRandomWords} from 'redux/selectors'
export default function TestWordsView() {
 const learnList = useSelector(selectRandomWords);
  console.log(learnList);
 return(
    <Sections>

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