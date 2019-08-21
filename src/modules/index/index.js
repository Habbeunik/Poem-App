import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import { LandingHeader } from '../../components/header';
import Signup from './signup';

function indexPageWrapper(PageComponent) {
  return function Page(props) {
    return (
      <div className='index-container'>
        <LandingHeader />
        <PageComponent {...props} />
      </div>
    );
  };
}

const HomePage = indexPageWrapper(Home);
const SignupPage = indexPageWrapper(Signup);

const IndexModule = (
  <Fragment>
    <Route path='/' exact component={HomePage} />
    <Route path='/signup' exact component={SignupPage} />
  </Fragment>
);

export default IndexModule;
