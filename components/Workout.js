'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View, ScrollView, ProgressViewIOS} = ReactNative;

class Workout extends Component {

  render() {
    const progNum = 0.5
    return (
      <ScrollView style={styles.workoutView}>
        <Text>Workout Title</Text>
        <Text>December 12, 2016</Text>
        <ProgressViewIOS style={styles.woProgress} progressViewStyle="bar"
          progress={progNum}
         />
      </ScrollView>
    )
  }
}


module.exports = Workout
