import React from 'react';
import { Container, Grid, Header, List, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './header.css';

export function LandingHeader() {
  return (
    <Container as='div' className='header-box'>
      <Grid>
        <Grid.Column width={4} floated='left'>
          <Link to='/'>
            <Header as='h2' style={{ color: '#fff' }}>
              POEM Me
            </Header>
          </Link>
        </Grid.Column>
        <Grid.Column
          width={6}
          floated='right'
          as='div'
          style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <List
            horizontal
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
              alignItems: 'center'
            }}
          >
            <List.Item as='div' style={{ marginRight: '30px' }}>
              <Button inverted as={Link} to='/signup'>
                Sign Up
              </Button>
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

export function AppHeader() {
  return (
    <Container as='div' className='header-box'>
      <Grid>
        <Grid.Column width={4} floated='left'>
          <Link to='/'>
            <Header as='h2' style={{ color: '#000000b0' }}>
              POEM Me
            </Header>
          </Link>
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
              justifyContent: 'flex-end',
              width: '100%',
              alignItems: 'center'
            }}
          >
            <List.Item style={{ marginRight: '30px' }}>
              <Icon name='bell outline' size='large' />
            </List.Item>
            <List.Item>
              <Icon name='bars' size='large' />
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default LandingHeader;
