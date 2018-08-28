import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Section from './containers/Section/Section';
// import Project from './containers/Project/Project';
// import Work from './containers/Work/Work';
// import Experience from './containers/Experience/Experience';
// import Contact from './containers/Contact/Contact';
// import Home from './containers/Home/Home';
import Aux from '../src/hoc/Aux/Aux';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <Switch>
            {/* <Route path="/about" component={About} />
            <Route path="/work/:projectTitle" component={Project} />
            <Route path="/work" component={Work} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} /> */}
            <Route path="/about" render={(props) => <Section {...props} loadContent="about" />} />
            <Route path="/work" render={(props) => <Section {...props} loadContent="work" />} />
            <Route path="/experience" render={(props) => <Section {...props} loadContent="experience" />} />
            <Route path="/" render={(props) => <Section {...props} loadContent="home" />} />
          </Switch>
        </Layout>
      </Aux>
    );
  }
}

export default App;
