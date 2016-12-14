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
        <Text style={styles.exerHead}>{rowNum}</Text>
        <Text style={styles.exerName}>{exercise.name}</Text>
      </View>
      <ListView
        dataSource = {setData}
        renderRow = {setRow}
        renderHeader = {setRowHead}
        style={styles.setTable}
      />
      <View style={styles.setFoot}>
        <View style={styles.setFootLeft}></View>
        <View style={styles.setFootContent}>
          <Text style={styles.setFootContentText}>Total Volume: lbs</Text>
        </View>
        <View style={styles.setFootRight}></View>
      </View>
    </View>
  )
}

const setRowHead = () => (
  <View style={[styles.setRow, styles.setHead]}>
    <View style={styles.setHeadCell}>
      <Text style={styles.setHeadText}>SET</Text>
    </View>
    <View style={[styles.setHeadCell, styles.flex3]}>
      <Text style={styles.setHeadText}>PREVIOUS</Text>
    </View>
    <View style={[styles.setHeadCell, styles.flex3]}>
      <Text style={styles.setHeadText}>WEIGHT</Text>
    </View>
    <View style={[styles.setHeadCell, styles.flex3]}>
      <Text style={styles.setHeadText}>REPS</Text>
    </View>
    <View style={styles.setHeadCell}>
    </View>
  </View>
)

const setRow = (set, sectionId, rowId) => {
  const rowNum = Number(rowId) + 1
  return(
    <View style={styles.setRow}>
      <View style={[styles.setCell, styles.setNum]}>
        <Text style={styles.setNumText}>{rowNum}</Text>
      </View>
      <View style={[styles.setCell, styles.flex3]}>
        <Text style={styles.setCellText}></Text>
      </View>
      <View style={[styles.setCell, styles.flex3]}>
        <Text style={styles.setCellText}>{set.weight}lbs</Text>
      </View>
      <View style={[styles.setCell, styles.flex3]}>
        <Text style={styles.setCellText}>{set.reps}</Text>
      </View>
      <View style={styles.setCell}>
        <Text style={styles.setCellText}>{set.complete ? 'yes' : 'no'}</Text>
      </View>
    </View>
  )
}

module.exports = exerRow;
