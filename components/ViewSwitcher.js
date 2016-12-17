//react
import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
} from 'react-native';

//redux
import { connect } from 'react-redux';

//styles
import styles from '../style.js'
import {LightText, DarkText} from './TextFormats';

//main section components
import Workout from './Workout';
import Front from './Front';
import Catalog from './Catalog'

export class ViewSwitcher extends Component {
  render () {
    if(this.props.route == 'WORKOUT') {
      return (
        <ScrollView style={styles.mainBlock}>
          <Workout/>
        </ScrollView>
      )
    }
    if(this.props.route == 'CATALOG') {
      return (
        <ScrollView style={styles.mainBlock}>
          <Catalog/>
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
