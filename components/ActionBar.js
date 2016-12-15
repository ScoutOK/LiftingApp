'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View} = ReactNative;
import {LightText, DarkText} from './TextFormats';

export default class ActionBar extends Component {
  render() {
    return (
      <View style={styles.actionBar}>
        <LightText style={styles.actionText}>Dis da bottom</LightText>
      </View>
    );
  }
}

