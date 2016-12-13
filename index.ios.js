/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
const TopBanner = require('./components/TopBanner');
const ActionBar = require('./components/ActionBar');
const Workout = require('./components/Workout');
const styles = require('./style.js');

export default class LiftingApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBanner style={styles.topBottom}/>
        <View style={styles.mainBlock}>
          <Text>Main Content</Text>
          <Workout />
        </View>
        <ActionBar style={styles.topBottom}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('LiftingApp', () => LiftingApp);
