import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import Projectpage from './component.js/Projectpage';
import Aboutuspage from './component.js/Aboutuspage';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meetteam from './component.js/Meetteam';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={App} />
      <Route  path='/project' component={Projectpage} />
      <Route  path='/about' component={Aboutuspage} />
      <Route  path='/meet' component={Meetteam} />
    </Switch>
    
  </Router>,

  document.getElementById('root')
);
