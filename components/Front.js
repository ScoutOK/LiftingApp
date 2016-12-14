'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View, ProgressViewIOS, ListView} = ReactNative;

class Front extends Component {
  constructor() {
    super();
  }
  render() {
    const progNum = 0.5
    return (
      <View style={styles.frontView}>
      </View>
    )
  }
}

const dummyUser = {
  firstName: 'Scout',
  lastName: 'O\'Keefe',
  screenName: 'scoutok',
}

module.exports = Front;
