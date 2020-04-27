/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import SplashScreen from './src/SplashScreen';
import Dashboard from './src/Dashboard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 4000);
  }
  setTimePassed() {
    this.setState({timePassed: true});
  }
  render() {
    if (!this.state.timePassed) {
      return <SplashScreen />;
    }
    return <Dashboard />;
  }
}
