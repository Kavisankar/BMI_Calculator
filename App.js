/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './navigators/RootNavigator';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="#0747a6" barStyle="light-content" />
        <RootNavigator />
      </>
    );
  }
}
