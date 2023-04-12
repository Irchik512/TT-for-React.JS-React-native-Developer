import { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { addToDictionary } from 'redux/dictionarySlice.js';
import { Form, Label, Input, Button } from './AddForm.styled';
import { nanoid } from 'nanoid';
// import { selectDictionary } from 'redux/selectors';

export default function AddtForm() {
  const [newWord, setNewWord] = useState('');
  const [translation, setTranslation] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'newWord':
        setNewWord(value);
        break;
      case 'translation':
        setTranslation(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const unikId = nanoid()
    const newWordObject = { 
      id: unikId,
      wordToLearn: newWord,
      translation,
     };
    dispatch(addToDictionary(newWordObject));
    console.log(newWordObject);
    setNewWord('');
    setTranslation('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        newWord
        <Input
          type="text"
          name="newWord"
          value={newWord}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="newWord may contain only letters"
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        translation
        <Input
          type="text"
          name="translation"
          value={translation}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Translation contain only letters"
          onInput={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add word</Button>
    </Form>
  );
};
