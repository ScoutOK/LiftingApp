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
        <Text>Free Workout</Text>
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
  const rowNum = Number(rowId) + 1
  const ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const setData = ds2.cloneWithRows(exercise.sets);
  return (
    <View style={styles.exerRow}>
      <View style={styles.exerTop}>
        <Text style={styles.exerciseHead}>Exercise {rowNum}</Text>
        <Text>{exercise.name}</Text>
      </View>
      <ListView
        dataSource = {setData}
        renderRow = {setRow}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.minorSeparator} />}
        style={styles.setTable}
      />
    </View>
  )
}

const setRow = (set, sectionId, rowId) => {
  const rowNum = Number(rowId) + 1
  return(
    <View style={styles.setRow}>
      <View style={styles.setCell}>
        <Text style={styles.setCellText}>{rowNum}</Text>
      </View>
      <View style={styles.setCell, styles.flex2}>
        <Text style={styles.setCellText}>{set.weight}lbs</Text>
      </View>
      <View style={styles.setCell, styles.flex2}>
        <Text style={styles.setCellText}>{set.reps}</Text>
      </View>
    </View>
  )
}

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
