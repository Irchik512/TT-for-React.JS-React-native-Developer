import AddForm  from 'components/AddForm/AddForm'
import Sections  from 'components/Section/Section'

export default function AddWordView() {
  return(
    <Sections> 
      <h2>Add new word</h2>
      <AddForm />
    </Sections>
  );
};