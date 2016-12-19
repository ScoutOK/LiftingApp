'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import styles from '../style.js'
import {Text} from 'react-native';

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

export class LightLarger extends Component {
  render() {
    return (
      <Text style={[styles.lightText, styles.larger]}>
        {this.props.children}
      </Text>
    )
  }
}

export class LightBold extends Component {
  render() {
    return (
      <Text style={[styles.lightText, styles.bold]}>
        {this.props.children}
      </Text>
    )
  }
}
