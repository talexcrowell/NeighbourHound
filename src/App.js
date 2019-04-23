import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './components/main';
import HeaderBar from './components/headerbar';
import News from './components/news';
import Community from './components/community';
import Rex from './components/rex';

class App extends Component {
  render() {
    return (
      <Router>  
      <div className="App" >
        <Route path="/" component={HeaderBar} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/news" component ={News} />
          <Route exact path="/community" component ={Community} />
          <Route exact path="/rex" component ={Rex} />
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
