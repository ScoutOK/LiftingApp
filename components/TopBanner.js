'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View} = ReactNative;

class TopBanner extends Component {
  render() {
    return (
      <View style={styles.topBar}>
        <View style={styles.topSpacer}/>
        <View>
          <Text>Lifting App</Text>
        </View>
      </View>
    );
  }
}

module.exports = TopBanner;
