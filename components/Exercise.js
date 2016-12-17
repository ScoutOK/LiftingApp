import React, {Component} from 'react';
import ReactNative from 'react-native';
import styles from '../style.js'
import {Text, View, ScrollView, ProgressViewIOS, ListView} from 'react-native';
import {LightText, DarkText} from './TextFormats';

export default exerRow = (exercise, sectionId, rowId) => {
  const rowNum = Number(rowId) + 1
  const ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  const setData = ds2.cloneWithRows(exercise.sets);
  const calcVolume = (setGroup) => {
    let total = 0
    setGroup.forEach((set) => {
      if (set.complete) {
        total += set.weight * set.reps
      }
    })
    return total
  }
  return (
    <View style={styles.exerRow}>
      <View style={styles.exerTop}>
        <Text style={styles.exerHead}>{rowNum}</Text>
        <DarkText style={styles.exerName}>{exercise.name}</DarkText>
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
          <LightText style={styles.setFootContentText}>Total Volume: {calcVolume(exercise.sets)}lbs</LightText>
        </View>
        <View style={styles.setFootRight}></View>
      </View>
    </View>
  )
}

const setRowHead = () => (
  <View style={[styles.setRow, styles.setHead]}>
    <View style={styles.setHeadCell}>
      <DarkText style={styles.setHeadText}>SET</DarkText>
    </View>
    <View style={[styles.setHeadCell, styles.flex3]}>
      <DarkText style={styles.setHeadText}>PREVIOUS</DarkText>
    </View>
    <View style={[styles.setHeadCell, styles.flex3]}>
      <DarkText style={styles.setHeadText}>WEIGHT</DarkText>
    </View>
    <View style={[styles.setHeadCell, styles.flex3]}>
      <DarkText style={styles.setHeadText}>REPS</DarkText>
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
        <LightText style={styles.setNumText}>{rowNum}</LightText>
      </View>
      <View style={[styles.setCell, styles.flex3]}>
        <DarkText style={styles.setCellText}></DarkText>
      </View>
      <View style={[styles.setCell, styles.flex3]}>
        <DarkText style={styles.setCellText}>{set.weight}lbs</DarkText>
      </View>
      <View style={[styles.setCell, styles.flex3]}>
        <DarkText style={styles.setCellText}>{set.reps}</DarkText>
      </View>
      <View style={styles.setCell}>
        <DarkText style={styles.setCellText}>{set.complete ? 'yes' : 'no'}</DarkText>
      </View>
    </View>
  )
}
