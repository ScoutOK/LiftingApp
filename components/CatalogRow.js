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

export default class cataRow extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    };
  }

  render() {
    return (
      <View>
        <View style={styles.catalogRow}>
          <View style={styles.flex3}>
            <Text>{this.props.exercise.name}</Text>
          </View>
          <View style={styles.flex1}>
            <Text>Details</Text>
          </View>
          <View style={styles.flex1}>
            <Text>Add</Text>
          </View>
        </View>
        {this.state.showDetails ?
          <View style={styles.catalogDrop}>
            <View>
              <LightText>Exercise type: {this.props.exercise.exerciseType}</LightText>
            </View>
            <View>
              <LightText>Main muscle: {this.props.exercise.mainMuscle}</LightText>
            </View>
          </View>
        :
          <TouchableHighlight style={styles.catalogSep} onPress={()=>this.setState({showDetails: true})}>
            <Text>
              <LightText>Test Text</LightText>
            </Text>
          </TouchableHighlight>

        }
      </View>
    )
  }
}
