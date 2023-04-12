// import { Button, Input, VStack } from '@chakra-ui/react'
import {AddForm } from 'components/AddForm/AddForm'
import Sections  from 'components/Section/Section'
export default function LoginView() {
  return(
    <>
      <Sections> 
        <h2>Add new word</h2>
        <AddForm />
      </Sections>
        {/* <VStack>
          <Input placeholder='mail' size='md' />
          <Input placeholder='password' size='md' />
          <Button colorScheme='teal' variant='outline'>
            Button
          </Button>
        </VStack> */}
    </>
  )
};