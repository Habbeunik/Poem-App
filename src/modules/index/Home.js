import React from 'react';
import { Container, Grid, Header, Button, Form } from 'semantic-ui-react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

const CustomDotGroup = ({ slides, size }) => {
  console.log('slides', slides);
  return (
    <Container textAlign='center'>
      <Button.Group size={size}>
        {[...Array(slides).keys()].map(slide => (
          <Button
            inverted
            as={Dot}
            key={slide}
            icon='circle'
            slide={slide}
            className='carousel-button'
          />
        ))}
      </Button.Group>
    </Container>
  );
};

function Home() {
  return (
    <Container as='div' className='Home'>
      <Grid columns={2}>
        <Grid.Column>
          <div style={{ margin: '100px 0px' }}>
            <Header as='p' className='faintText'>
              The Meaning Of Love
            </Header>
            <CarouselProvider
              naturalSlideWidth={1}
              naturalSlideHeight={0.6}
              totalSlides={3}
              style={{ width: '100%' }}
              interval={15000}
              isPlaying
            >
              <Slider>
                <Slide index={0}>
                  <Header as='h1' inverted style={{ lineHeight: '3rem' }}>
                    To love is to share life together,
                    <br />
                    to build special plans just for two,
                    <br />
                    to work side by side, and then smile with pride,
                    <br />
                    as one by one, dreams all come true.
                  </Header>
                </Slide>
                <Slide index={1}>
                  <Header as='h1' inverted style={{ lineHeight: '3rem' }}>
                    To love is to help and encourage
                    <br />
                    with smiles and sincere words of praise,
                    <br />
                    to take time to share,
                    <br />
                    to listen and care
                    <br />
                    in tender, affectionate ways.
                  </Header>
                </Slide>
                <Slide index={2}>
                  <Header as='h1' inverted style={{ lineHeight: '3rem' }}>
                    Everything remains exactly as it was.
                    <br />
                    I am I, and you are you, and the old life that we lived so
                    fondly together is untouched, unchanged.
                    <br />
                    Whatever we were to each other, that we are still.
                  </Header>
                </Slide>
              </Slider>
            </CarouselProvider>
            <Grid>
              <Grid.Column
                width={4}
                floated='right'
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    width: '5px',
                    height: '20px',
                    background: '#fff',
                    marginRight: '10px'
                  }}
                />
                <p className='faintText'>Krinah Shah </p>
              </Grid.Column>
            </Grid>
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
                  <Form>
                    <Form.Field>
                      {/* <label htmlFor='input'>Email</label> */}
                      <input
                        name='email'
                        className='input'
                        placeholder='Email'
                      />
                    </Form.Field>
                    <Form.Field>
                      {/* <label htmlFor='input'>Password</label> */}
                      <input
                        name='email'
                        type='password'
                        className='input'
                        placeholder='Password'
                      />
                    </Form.Field>
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
