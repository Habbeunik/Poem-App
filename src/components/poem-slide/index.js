import React, { Fragment } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { Header, Grid } from 'semantic-ui-react';

export default function PoemSlide() {
  return (
    <Fragment>
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
              I am I, and you are you, and the old life that we lived so fondly
              together is untouched, unchanged.
              <br />
              Whatever we were to each other, that we are still.
            </Header>
          </Slide>
        </Slider>
      </CarouselProvider>
      <Grid>
        <Grid.Column
          width={6}
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
    </Fragment>
  );
}
