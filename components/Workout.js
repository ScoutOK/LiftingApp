'use strict';
import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View, ScrollView, ProgressViewIOS, ListView} = ReactNative;

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
      <ScrollView style={styles.workoutView}>
        <Text>Workout Title</Text>
        <Text>December 12, 2016</Text>
        <ProgressViewIOS style={styles.woProgress} progressViewStyle="bar"
          progress={progNum}
        />
        <ListView
          dataSource = {this.state.dataSource}
          renderRow={exerRow}
        />
      </ScrollView>
    )
  }
}

const exerRow = (exercise, sectionId, rowId) => {
const rowNum = parseNum()
return (
  <View>
    <Text>Exercise {rowId+1}</Text>
    <Text>{exercise.name}</Text>
  </View>
)}

const dummyWorkout = [
  {
    name: 'Bench Press',
    sets: [
      {
        weight: 150,
        reps: 10
      },
      {
        weight: 150,
        reps: 10
      },
      {
        weight: 150,
        reps: 10
      },
      {
        weight: 150,
        reps: 10
      },
      {
        weight: 150,
        reps: 10
      }
    ]
  },
  {
    name: 'Bentover Row',
    sets: [
      {
        weight: 150,
        reps: 10
      },
      {
        weight: 150,
        reps: 10
      },
      {
        weight: 150,
        reps: 10
      }
    ]
  },
  {
    name: 'Shoulder Press',
    sets: [
      {
        weight: 150,
        reps: 10
      },
      {
        weight: 150,
        reps: 10
      },
      {
        weight: 150,
        reps: 10
      },
      {
        weight: 150,
        reps: 10
      }
    ]
  },
  {
    name: 'Pullup',
    sets: [
      {
        weight: 150,
        reps: 10
      },
      {
        weight: 150,
        reps: 10
      },{
        weight: 150,
        reps: 10
      }
    ]
  }
]

module.exports = Workout
