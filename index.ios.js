/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
const TopBanner = require('./components/TopBanner');

export default class LiftingApp extends Component {
  render() {
    return (
      <View>
        <TopBanner/>
        <Text>Main Content</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('LiftingApp', () => LiftingApp);
