'use strict';
import React, {Component} from 'react';
import styles from '../style.js'
import {Text, View} from 'react-native';
import {LightText, DarkText} from './TextFormats';

export default class TopBanner extends Component {
  render() {
    return (
      <View style={styles.topBar}>
        <View style={styles.topSpacer}/>
        <View style={styles.appTitleCont}>
          <LightText style={styles.appTitle}>Lifting App</LightText>
        </View>
      </View>
    );
  }
}
