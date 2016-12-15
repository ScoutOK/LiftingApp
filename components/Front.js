'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import {LightText, LightLarger} from './TextFormats';
const styles = require('../style.js')
const {Text, View, ProgressViewIOS, ListView, TouchableHighlight, Image} = ReactNative;

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
        <LightLarger>Welcome, {this.state.user.screenName}</LightLarger>
        <Image
          style={styles.profilePic}
          source={require('../images/SoK.jpg')}
        />
        <TouchableHighlight onPress={this.props.toWorkout} style={styles.frontChoice}>
          <Text>
            <LightLarger>Start Workout</LightLarger>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.frontChoice}>
          <Text>
            <LightLarger>My Stats</LightLarger>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.frontChoice}>
          <Text>
            <LightLarger>My Routines</LightLarger>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.frontChoice}>
          <Text>
            <LightLarger>Exercises</LightLarger>
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

