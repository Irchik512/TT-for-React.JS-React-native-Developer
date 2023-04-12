// import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { Form } from "components/AddForm/AddForm.styled";
import { useRef } from "react";
// import { useDispatch } from 'react-redux';
// import {register} from 'redux/auth'

export default function TestWordsView() {
  const registerFormRef = useRef(null);
  // const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

  //   // const registerFormData = new FormData(registerFormRef.current);
  //   const registerFormData  = registerFormRef.current.elements;
  //   dispatch(register(registerFormData));
    
  };
  return(
    <>
      <h2>Try to test yourself</h2>
      <Form  ref={registerFormRef} onSubmit={handleSubmit}>

      {/* <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input name="name" placeholder='name' size='md' />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Mail</FormLabel>
        <Input name="mail" type='email' placeholder='mail' size='md' />
        <FormLabel>Password</FormLabel>
        <Input name="password" placeholder='password' size='md' />
      </FormControl> */}
      {/* <Button type="submit" colorScheme='teal' variant='outline'>
            Button
      </Button> */}
      </Form>
    </>
      
  )
};