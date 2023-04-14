import Section from 'components/Section/Section';
import DictionaryList from 'components/DictionaryList/List';

import Notification from 'components/Notification/Notification';
import { useSelector } from 'react-redux';
import { selectDictionary } from 'redux/selectors';

export default function DictionaryView() {
  const dictionaryList = useSelector(selectDictionary);

  return (
    <Section title = 'Dictionary'>
      {dictionaryList.length < 1 ? (
          <Notification message="There is no word to learn yet." />
        ) : (
          <DictionaryList/>
        )}
    </Section>
  );
};