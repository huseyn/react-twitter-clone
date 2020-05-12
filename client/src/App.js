import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Trend from './components/layout/Trend';
import Profile from './components/pages/Profile';
import Register from './components/auth/Register';

import PostState from './context/post/PostState';
import AuthState from './context/auth/AuthState';

import './App.css';

const App = () => {

  return (
    <AuthState>
      <PostState>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/register' component={Register} />
            </Switch>
            <Trend />
          </div>
        </Router>
      </PostState>
    </AuthState>
  );
}

export default App;
