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
  ScrollView
} from 'react-native';
const TopBanner = require('./components/TopBanner');
const ActionBar = require('./components/ActionBar');
const Workout = require('./components/Workout');
const Front = require('./components/Front')
const styles = require('./style.js');

export default class LiftingApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TopBanner style={styles.topBottom}/>
        <ScrollView style={styles.mainBlock}>
          <Front />
          <Workout />
        </ScrollView>
        <ActionBar style={styles.topBottom}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('LiftingApp', () => LiftingApp);
