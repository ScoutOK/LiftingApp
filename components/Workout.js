'use strict';

//react
import React, {Component} from 'react';
import {Text, View, ListView} from 'react-native';

//style
import styles from '../style.js'
import {LightText, DarkText} from './TextFormats';

//component
import Exercise from './Exercise';

const doneRatio = (workout) => {
  let total = 0;
  let complete = 0;
  for (let key in workout) {
    workout[key].sets.forEach((set)=>{
      total += 1
      if (set.complete) {
        complete += 1
      }
    }
    )
  }
  return complete/total
}


export default class Workout extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(dummyWorkout),
      progress: doneRatio(dummyWorkout),
    };
  }
  render() {
    return (
      <View style={styles.workoutView}>
        <View style={styles.workoutHead}>
          <DarkText>Free Workout</DarkText>
          <DarkText>December 12, 2016</DarkText>
          <View style={styles.woProgCont}>
            <View style={[styles.woProgBar, {flex: this.state.progress}]} />
            <View style={{flex: 1-this.state.progress}} />
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

