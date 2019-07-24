import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './modules/index';
// import Onboard from './modules/onboard';
// import Main from './modules/app';

// css
import 'semantic-ui-css/semantic.min.css';
import '../font/style.css';
import './styles/main.css';

const App = () => (
  <Switch>
    <Index />
    {/* <Route exact path='/' component={Index} /> */}
    {/* <Route path='/onboard' component={Onboard} /> */}
    {/* <Route path='/app' component={Main} /> */}
  </Switch>
);

export default App;
