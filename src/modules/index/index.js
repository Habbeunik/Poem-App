import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import { LandingHeader } from '../../components/header';

export default function IndexModule() {
  return (
    <div className='index-container'>
      <LandingHeader />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}
