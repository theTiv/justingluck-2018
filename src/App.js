import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import About from './containers/About/About';
import Project from './containers/Project/Project';
import Work from './containers/Work/Work';
import Experience from './containers/Experience/Experience';
import Contact from './containers/Contact/Contact';
import Home from './containers/Home/Home';
import Aux from '../src/hoc/Aux/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/work/:projectTitle" component={Project} />
            <Route path="/work" component={Work} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </Aux>
    );
  }
}

export default App;
