import Section from 'components/Section/Section';
import List from 'components/List/List';
import Notification from 'components/Notification/Notification';

export default function DictionaryView() {

  return (
    <>
      <Section title = 'Dictionary'>
          <Notification>There is no word to lern yet.</Notification>
            <List />
      </Section>
    </>
  );
}
