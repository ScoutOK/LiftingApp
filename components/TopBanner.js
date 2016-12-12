'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View} = ReactNative;

class TopBanner extends Component {
  render() {
    return (
      <View>
        <Text style={styles.topBar}>Lifting App</Text>
      </View>
    );
  }
}

module.exports = TopBanner;
