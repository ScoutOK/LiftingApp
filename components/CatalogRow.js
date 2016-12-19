//react
import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

//styles
import styles from '../style.js'
import {LightText, DarkText} from './TextFormats';

export default cataRow = (exercise, sectionId, rowId) => {
  let showDetails = false
  return (
    <View>
      <View style={styles.catalogRow}>
        <View style={styles.flex3}>
          <Text>{exercise.name}</Text>
        </View>
        <View style={styles.flex1}>
          <Text>Details</Text>
        </View>
        <View style={styles.flex1}>
          <Text>Add</Text>
        </View>
      </View>
      {showDetails ?
        <View style={styles.catalogDrop}>
          <View>
            <LightText>Exercise type: {exercise.exerciseType}</LightText>
          </View>
          <View>
            <LightText>Main muscle: {exercise.mainMuscle}</LightText>
          </View>
        </View>
      :
        <TouchableHighlight style={styles.catalogSep} onPress={()=>(showDetails = true)}>
          <Text>
            <LightText>Test Text</LightText>
          </Text>
        </TouchableHighlight>

      }
    </View>
  )
}
