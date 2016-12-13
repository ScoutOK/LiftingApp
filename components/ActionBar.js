'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View} = ReactNative;

class ActionBar extends Component {
  render() {
    return (
      <View style={styles.actionBar}>
        <Text>Dis da bottom</Text>
      </View>
    );
  }
}

module.exports = ActionBar;
