/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
  Navigator,
  StatusBar
} from 'react-native';

//redux stuff
import { Provider } from 'react-redux'
import store from './store'

//Components
import TopBanner from './components/TopBanner';
import ActionBar from './components/ActionBar';
import ViewSwitcher from './components/ViewSwitcher';
import Front from './components/Front';

import styles from './style.js';

export default class LiftingApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <TopBanner style={styles.topBottom}/>
          <ViewSwitcher />
          <ActionBar style={styles.topBottom}/>
        </View>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('LiftingApp', () => LiftingApp);
