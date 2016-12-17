'use strict';
import React, {Component} from 'react';
import styles from '../style.js'
import {Text, View} from 'react-native';
import {LightText, DarkText, LightBold} from './TextFormats';

export default class TopBanner extends Component {
  render() {
    return (
      <View style={styles.topBar}>
        <View style={styles.topSpacer}/>
        <View style={styles.appTitleCont}>
          <LightBold style={styles.appTitle}>Lifting App</LightBold>
        </View>
      </View>
    );
  }
}
