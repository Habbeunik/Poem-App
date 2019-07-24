import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Input } from '.';

export default function LoginForm() {
  return (
    <Form>
      <Input name='email' placeholder='Email' />
      <Input name='email' type='password' placeholder='Password' />
      <Button
        fluid
        as='button'
        color='violet'
        size='large'
        loading
        style={{ background: '#783CF8 !important' }}
      >
        Login
      </Button>
    </Form>
  );
}
