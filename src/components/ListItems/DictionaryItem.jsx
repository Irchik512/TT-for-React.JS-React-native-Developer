import { Word } from 'components/ListItems/DictionaryItem.styled';
import { Button } from 'components/AddForm/AddForm.styled';
// import { useDispatch } from 'react-redux';

export default function DictionaryItem({ word, translation, id }) {
//   const dispatch = useDispatch();
  return (
    <Word>
      <p>
        {word}: {translation}
      </p>
      <Button type="button" >
        Delete
      </Button>
    </Word>
  );
}


