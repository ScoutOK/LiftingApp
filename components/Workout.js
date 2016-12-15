'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View, ProgressViewIOS, ListView} = ReactNative;
import Exercise from './Exercise';
import {LightText, DarkText} from './TextFormats';

export default class Workout extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(dummyWorkout),
    };
  }
  render() {
    const progNum = 0.5
    return (
      <View style={styles.workoutView}>
        <View style={styles.workoutHead}>
          <DarkText>Free Workout</DarkText>
          <DarkText>December 12, 2016</DarkText>
          <View style={styles.woProgCont}>
            <View style={[styles.woProgBar, {flex: prog}]} />
            <View style={{flex: rest}} />
          </View>
        </View>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow={Exercise}
        />
      </View>
    )
  }
}

//dummy data for progress meter
const prog = 4/5;
const rest = 1-prog;


const dummyWorkout = [
  {
    name: 'Bench Press',
    sets: [
      {
        weight: 150,
        reps: 10,
        complete: true
      },
      {
        weight: 150,
        reps: 10,
        complete: true
      },
      {
        weight: 150,
        reps: 10,
        complete: false
      },
      {
        weight: 150,
        reps: 10,
        complete: true
      },
      {
        weight: 150,
        reps: 10,
        complete: true
      }
    ]
  },
  {
    name: 'Bentover Row',
    sets: [
      {
        weight: 150,
        reps: 10,
        complete: false
      },
      {
        weight: 150,
        reps: 10,
        complete: true
      },
      {
        weight: 150,
        reps: 10,
        complete: false
      }
    ]
  },
  {
    name: 'Shoulder Press',
    sets: [
      {
        weight: 150,
        reps: 10,
        complete: true
      },
      {
        weight: 150,
        reps: 10,
        complete: false
      },
      {
        weight: 150,
        reps: 10,
        complete: true
      },
      {
        weight: 150,
        reps: 10,
        complete: true
      }
    ]
  },
  {
    name: 'Pullup',
    sets: [
      {
        weight: 150,
        reps: 10,
        complete: true
      },
      {
        weight: 150,
        reps: 10,
        complete: true
      },{
        weight: 150,
        reps: 10,
        complete: false
      }
    ]
  }
]

