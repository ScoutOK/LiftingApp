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
const styles = require('./style.js');

export default class LiftingApp extends Component {
  render() {
    return (
      <View>
        <TopBanner style={styles.topBar}/>
        <Text>Main Content</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('LiftingApp', () => LiftingApp);
