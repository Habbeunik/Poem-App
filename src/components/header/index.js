import React from 'react';
import { Container, Grid, Header, List, Button } from 'semantic-ui-react';

import './header.css';

export function LandingHeader() {
  return (
    <Container as='div' className='header-box'>
      <Grid>
        <Grid.Column width={4} floated='left'>
          <Header as='h2' style={{ color: '#fff' }}>
            POEM Me
          </Header>
        </Grid.Column>
        <Grid.Column
          width={3}
          floated='right'
          as='div'
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <List
            horizontal
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center'
            }}
          >
            <List.Item as='div'>
              <Button inverted>Sign up</Button>
            </List.Item>
            <List.Item as='div' style={{ color: '#fff' }}>
              About
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default LandingHeader;
