'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text} = ReactNative;

export class LightText extends Component {
  render() {
    return (
      <Text style={styles.lightText}>
        {this.props.children}
      </Text>
    )
  }
}

export class DarkText extends Component {
  render() {
    return (
      <Text style={styles.darkText}>
        {this.props.children}
      </Text>
    )
  }
}
