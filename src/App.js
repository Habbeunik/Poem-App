import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Index from './modules/index';
// import Onboard from './modules/onboard';
// import Main from './modules/app';

// css
import 'semantic-ui-css/semantic.min.css';
import '../font/style.css';
import './styles/main.css';

const App = () => (
  <Switch>
    <Route exact path='/' component={Index} />
    {/* <Route path='/onboard' component={Onboard} /> */}
    {/* <Route path='/app' component={Main} /> */}
  </Switch>
);

export default App;
