import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Navigator,
  StatusBar
} from 'react-native';
import styles from '../style.js'
import {LightText, DarkText} from './TextFormats';

//main section components
import Workout from './Workout';
import Front from './Front';
import { connect } from 'react-redux';

export class ViewSwitcher extends Component {
  render () {
    if(this.props.route == 'WORKOUT') {
      return (
        <ScrollView style={styles.mainBlock}>
          <Workout/>
        </ScrollView>
      )
    }
    return (
      <View style={styles.mainBlock}>
        <Front />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  route: state.route
 })

export default connect(mapStateToProps)(ViewSwitcher);
