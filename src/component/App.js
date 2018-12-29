import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Apple from './Apple';
import Error from './Error';
import Navigation from './Navigation';
import './../icon-dist/iconfont.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <i className="icon icon-support" style={{fontSize:'150px', color: 'green'}}></i>
              <i className="icon icon-team" style={{ color: 'blue'}}></i>
              <Navigation />
              <Switch>
                  <Route path='/' component={Home} exact/>
                  <Route path='/about' component={About}/>
                  <Route path='/contact' component={Contact} />
                  <Route path='/apple' component={Apple}/>
                  <Route component={Error} />
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
