/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
  Navigator
} from 'react-native';

//Components
import TopBanner from './components/TopBanner';
import ActionBar from './components/ActionBar';
import Workout from './components/Workout';
import Front from './components/Front';

const styles = require('./style.js');

export default class LiftingApp extends Component {
  render() {
    const routes = [
    {title: 'Front Page', index: 0},
    {title: 'Workout', index: 1},
  ];
    return (
      <View style={styles.container}>
        <TopBanner style={styles.topBottom}/>
          <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={(route, navigator) => {
              if(route.title == 'Front Page') {
                return (
                  <View style={styles.mainBlock}>
                    <Front
                    // Function to call when a new scene should be displayed
                     toWorkout={() => {
                       navigator.push({
                         title: 'Workout',
                         index: 1,
                       });
                     }}
                    />
                  </View>
                )
              }
              if(route.title == 'Workout') {
                return (
                  <ScrollView style={styles.mainBlock}>
                    <Workout/>
                  </ScrollView>
                )
              }
            }}
          />
        <ActionBar style={styles.topBottom}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('LiftingApp', () => LiftingApp);
