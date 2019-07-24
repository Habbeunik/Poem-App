import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import PoemSlide from '../../components/poem-slide';

import 'pure-react-carousel/dist/react-carousel.es.css';
import RegisterForm from '../../components/Form/register';

function Signup() {
  return (
    <Container
      as='div'
      className='Home'
      style={{ position: 'relative', marginTop: '100px' }}
    >
      <Grid stackable>
        <Grid.Column
          width={10}
          as='div'
          className='page-card'
          style={{ borderRadius: '5px' }}
        >
          <Grid centered>
            <Grid.Column computer={8} mobile={14}>
              <Header
                as='h1'
                style={{ color: '#000000b0', textAlign: 'center' }}
              >
                Sign Up
              </Header>
              <p>
                Hi There, Welcome!
                <br />
                Share and Read Poems from other beautiful minds
              </p>
              <RegisterForm />
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column width={5} floated='right'>
          <PoemSlide />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Signup;
