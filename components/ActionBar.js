'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View, TouchableHighlight, Navigator} = ReactNative;
import {LightText, DarkText} from './TextFormats';

export default class ActionBar extends Component {
  render() {
    return (
      <View style={styles.actionBar}>
        <TouchableHighlight onPress={this.props.toHome} style={styles.actionItem}>
          <Text>
            <LightText>Home</LightText>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.toHome} style={styles.actionItem}>
          <Text>
            <LightText>Thing 2</LightText>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.toHome} style={styles.actionItem}>
          <Text>
            <LightText>Thing 3</LightText>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.toHome} style={styles.actionItem}>
          <Text>
            <LightText>Thing 4</LightText>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.toHome} style={styles.actionItem}>
          <Text>
            <LightText>Thing 5</LightText>
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

