import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import About from './About';
import Nomatch from './Nomatch';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>
<Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route component={Nomatch}/>
      </Switch>
    </div>
  </Router>
    , document.getElementById('root'));
registerServiceWorker();
