import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import LoginForm from '../../components/Form/login';
import PoemSlide from '../../components/poem-slide';

import 'pure-react-carousel/dist/react-carousel.es.css';

function Home() {
  return (
    <Container as='div' className='Home'>
      <Grid columns={2} stackable>
        <Grid.Column>
          <div style={{ margin: '100px 0px' }}>
            <PoemSlide />
          </div>
        </Grid.Column>
        <Grid.Column width={4} style={{ position: 'relative' }} floated='right'>
          <div className='page-card'>
            <p>Hey, Welcome Back !</p>
            <Header as='h3' style={{ marginTop: '100px' }}>
              Login
            </Header>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <LoginForm />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Home;
