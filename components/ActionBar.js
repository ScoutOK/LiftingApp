'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import styles from '../style.js'
import {Text, View, TouchableHighlight} from 'react-native';
import {LightText, DarkText} from './TextFormats';
import { goPlace } from '../reducers/route'

export class ActionBar extends Component {
  render() {
    return (
      <View style={styles.actionBar}>
        <TouchableHighlight onPress={()=>this.props.goPlace('HOME')} style={styles.actionItem}>
          <Text>
            <LightText>Home</LightText>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.actionItem}>
          <Text>
            <LightText>Thing 2</LightText>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.actionItem}>
          <Text>
            <LightText>Thing 3</LightText>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.actionItem}>
          <Text>
            <LightText>Thing 4</LightText>
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.actionItem}>
          <Text>
            <LightText>Thing 5</LightText>
          </Text>
        </TouchableHighlight>
      </View>
    );
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
  })

export default connect(mapStateToProps, mapDispatchToProps)(ActionBar);

