import Section from 'components/Section/Section';
import List from 'components/List/List';
// import { useSelector } from 'react-redux';
// import { selectDictionary} from 'redux/selectors';
import Notification from 'components/Notification/Notification';

export default function DictionaryView() {
  // const dictionaryList = useSelector(selectDictionary);


  return (
    <>
      <Section title = 'Dictionary'>
          <Notification>There is no word to lern yet.</Notification>
            <List />
      </Section>
    </>
  );
}
