import Section from 'components/Section/Section';
import List from 'components/List/List';
// import Notification from 'components/Notification/Notification';
// import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectContactsValue ,selectIsLoading, selectError } from 'redux/contacts/selectors';
// import {getAllContacts} from 'redux/contacts/operations'
// import { useEffect } from 'react';

export default function DictionaryView() {
  // const contactsList = useSelector(selectContactsValue);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  
  // useEffect(() => {
  //   dispatch(getAllContacts());
  // }, [dispatch]);

  return (
    <>
      <Section>
        <h2>Dictionary</h2>   
        {/* {isLoading && !error && <p>Request in progress...</p>}
        {wordsList.length < 1 ? ( */}
          <p>There is no word to lern yet.</p>
        {/* ) : ( */}
          <>
            <List />
          </>
        {/* )} */}
        {/* {error !== null && <Notification>{toast.error(error)}</Notification>}    */}
      </Section>
    </>
  );
}
