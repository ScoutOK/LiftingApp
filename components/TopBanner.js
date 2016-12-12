'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
//const styles = require('../styles.js')
const {Text, View} = ReactNative;

class StatusBar extends Component {
  render() {
    return (
      <View>
        <Text>Lifting App</Text>
      </View>
    );
  }
}

module.exports = StatusBar;
