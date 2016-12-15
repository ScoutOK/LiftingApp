'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View} = ReactNative;

export default class TopBanner extends Component {
  render() {
    return (
      <View style={styles.topBar}>
        <View style={styles.topSpacer}/>
        <View style={styles.appTitleCont}>
          <Text style={styles.appTitle}>Lifting App</Text>
        </View>
      </View>
    );
  }
}
