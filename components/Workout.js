'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View, ProgressViewIOS, ListView} = ReactNative;
const Exercise = require('./Exercise');

class Workout extends Component {
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
          <Text>Free Workout</Text>
          <Text>December 12, 2016</Text>
          <ProgressViewIOS style={styles.woProgress} progressViewStyle="bar"
            progress={progNum}
          />
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

module.exports = Workout
