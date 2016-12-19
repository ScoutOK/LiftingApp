'use strict';
import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { LightText, LightLarger } from './TextFormats';
import styles from '../style.js'
import { Text, View, ProgressViewIOS, ListView, TouchableHighlight, Image } from 'react-native';
import { goPlace } from '../reducers/route'

export class Front extends Component {
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
        <View style={styles.centerHoriz}>
          <Image
            style={styles.profilePic}
            source={require('../images/SoK.jpg')}
          />
        </View>
        <TouchableHighlight onPress={()=>this.props.goPlace('WORKOUT')} style={[styles.frontChoice, styles.centerVert]}>
          <Text>
            <LightLarger>Start Workout</LightLarger>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.frontChoice, styles.centerVert]}>
          <Text>
            <LightLarger>My Stats</LightLarger>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.frontChoice, styles.centerVert]}>
          <Text>
            <LightLarger>My Routines</LightLarger>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={()=>this.props.goPlace('CATALOG')} style={[styles.frontChoice, styles.centerVert]}>
          <Text>
            <LightLarger>Exercises</LightLarger>
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  route: state.route
 })

const mapDispatchToProps = (dispatch) => (
  {
    goPlace: (place) => {
      dispatch(goPlace(place))
    }
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Front);

const dummyUser = {
  firstName: 'Scout',
  lastName: 'O\'Keefe',
  screenName: 'scoutok',
}

