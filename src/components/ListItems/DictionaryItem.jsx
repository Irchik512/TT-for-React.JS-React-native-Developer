import { Button } from 'components/AddForm/AddForm.styled';
// import { useDispatch } from 'react-redux';

export default function DictionaryItem({wordToLearn, translation}) {
//   const dispatch = useDispatch();
  return (
    <div>
        <p>
          {wordToLearn}
        </p>
        <p>
          {translation}
        </p>
      <Button type="button" >
        Delete
      </Button>
  
    </div>
  );
}


