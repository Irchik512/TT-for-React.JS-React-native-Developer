import DictionaryItem from 'components/DictionaryList/DictionaryItem';
import { useSelector } from 'react-redux';
import { WordsList, Word } from './List.styled'
import { selectDictionary } from 'redux/selectors';

export default function DiktionaryList() {
  const dictionaryList = useSelector(selectDictionary);
  return (
    <WordsList>
     {dictionaryList.map(word => (
      <Word key={word.id} >
        <DictionaryItem wordToLearn= {word.wordToLearn} translation = {word.translation}/>
      </Word>
      ))}
    </WordsList>
  );
}
