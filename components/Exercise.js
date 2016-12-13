import React, {Component} from 'react';
import ReactNative from 'react-native';
const styles = require('../style.js')
const {Text, View, ScrollView, ProgressViewIOS, ListView} = ReactNative;

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
        renderHeader = {setRowHead}
        style={styles.setTable}
      />
    </View>
  )
}

const setRowHead = () => (
  <View style={[styles.setRow, styles.setHead]}>
    <View style={styles.setCell}>
      <Text style={styles.setHeadText}>Set</Text>
    </View>
    <View style={[styles.setCell, styles.flex2]}>
      <Text style={styles.setHeadText}>Weight</Text>
    </View>
    <View style={[styles.setCell, styles.flex2]}>
      <Text style={styles.setHeadText}>Reps</Text>
    </View>
    <View style={styles.setCell}>
      <Text style={styles.setHeadText}>Done</Text>
    </View>
  </View>
)

const setRow = (set, sectionId, rowId) => {
  const rowNum = Number(rowId) + 1
  return(
    <View style={styles.setRow}>
      <View style={styles.setCell}>
        <Text style={styles.setCellText}>{rowNum}</Text>
      </View>
      <View style={[styles.setCell, styles.flex2]}>
        <Text style={styles.setCellText}>{set.weight}lbs</Text>
      </View>
      <View style={[styles.setCell, styles.flex2]}>
        <Text style={styles.setCellText}>{set.reps}</Text>
      </View>
      <View style={styles.setCell}>
        <Text style={styles.setCellText}>{set.complete ? 'yes' : 'no'}</Text>
      </View>
    </View>
  )
}

module.exports = exerRow;
