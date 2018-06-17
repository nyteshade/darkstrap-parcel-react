import React, { Component } from 'react';
import Progress from '../Copland/Progress';
import logo from '../../imgs/logo.svg';
import styles from './App.scss';

class App extends Component {
  componentDidMount() {
    this.setState({percent: 0})
  }

  render() {
    return (
      <div className={styles.App}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className={styles.progress_container}>
          <Progress percent={((this.state && this.state.percent) || 23)}/>
        </div>
      </div>
    );
  }
}

export default App;
