import React, { Component } from 'react';
import logo from './jglogo.svg';
import styles from './App.scss';
console.log(styles);

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Front End Developer</h2>
        </div>
      </div>
    );
  }
}

export default App;
