import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Input } from '.';

export default function RegisterForm() {
  return (
    <Form>
      <Input name='firstName' placeholder='First Name' />
      <Input name='lastName' placeholder='Last Name' />
      <Input name='email' placeholder='Email' />
      <Input name='authorName' placeholder='Author Name' />
      <Input name='password' type='password' placeholder='Password' />
      <p style={{ textAlign: 'center' }}>
        <Button
          fluid
          as='button'
          color='violet'
          size='large'
          loading
          style={{ background: '#783CF8 !important' }}
        >
          Create Account
        </Button>
      </p>
    </Form>
  );
}
