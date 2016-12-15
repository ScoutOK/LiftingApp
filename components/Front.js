'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import {LightText} from './TextFormats';
const styles = require('../style.js')
const {Text, View, ProgressViewIOS, ListView, TouchableHighlight} = ReactNative;

export default class Front extends Component {
  constructor() {
    super();
    this.state = {
      user: dummyUser,
    }
  }
  render() {
    return (
      <View style={styles.frontView}>
        <LightText>Welcome {this.state.user.screenName}</LightText>
        <TouchableHighlight onPress={this.props.toWorkout}>
          <Text>
            <LightText>Start Workout</LightText>
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const dummyUser = {
  firstName: 'Scout',
  lastName: 'O\'Keefe',
  screenName: 'scoutok',
}

