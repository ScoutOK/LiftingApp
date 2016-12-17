//react
import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  TextInput
} from 'react-native';

//redux
import { connect } from 'react-redux';

//styles
import styles from '../style.js'
import {LightText, DarkText} from './TextFormats';

export default class Catalog extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(dummyExercises),
      search: '',
    };
  }
  render() {
    return (
      <View style={styles.workoutView}>
        <View style={styles.workoutHead}>
          <DarkText>Exercises</DarkText>
          <TextInput
            style={styles.searchBox}
            onChangeText={(text) => {
              this.setState({search: text})
            }}
            value={this.state.text}
          />
        </View>
        <ListView
          dataSource = {this.state.dataSource}
          renderRow={(exercise, sectionId, rowId) => {
            let searchLength = this.state.search.length
            console.log(this.state.search)
            if(this.state.search.toLowerCase() == exercise.name.substring(0, searchLength).toLowerCase()) {
              return (
                <View style={styles.catalogRow}>
                  <View>
                    <Text>{exercise.name}</Text>
                  </View>
                  <View>
                    <Text>Details</Text>
                  </View>
                  <View>
                    <Text>Add</Text>
                  </View>
                </View>
              )
            }
          }}
        />
      </View>
    )
  }
}

const dummyExercises = [
  {
    name: 'Bench Press',
    exerciseType: 'push',
    mainMuscle: 'Pectoralis Major, Sternal',
    assistanceMuscles: ['Pectoralis Major, Clavicular', 'Deltoid, Anterior', 'Triceps Brachii'],
    equipment: 'barbell',
  },
  {
    name: 'Back Squat',
    exerciseType: 'push',
    mainMuscle: 'Quadriceps',
    assistanceMuscles: ['Gluteus Maximus', 'Adductor Magnus', 'Soleus'],
    equipment: 'barbell',
  },
  {
    name: 'Deadlift (Conventional)',
    exerciseType: 'pull',
    mainMuscle: 'Gluteus Maximus',
    assistanceMuscles: ['Quadriceps', 'Adductor Magnus', 'Hamstrings', 'Soleus'],
    equipment: 'barbell',
  },
  {
    name: 'Overhead Press',
    exerciseType: 'push',
    mainMuscle: 'Deltoid, Anterior',
    assistanceMuscles: ['Pectoralis Major, Clavicular', 'Triceps Brachii', 'Deltoid, Lateral', 'Trapezius, Middle', 'Trapezius, Lower', 'Serratus Anterior, Inferior Digitations'],
    equipment: 'barbell',
  },
  {
    name: 'Tricep Dip',
    exerciseType: 'push',
    mainMuscle: 'Triceps Brachii',
    assistanceMuscles: ['Deltoid, Anterior', 'Pectoralis Major, Sternal', 'Pectoralis Major, Clavicular', 'Pectoralis Minor', 'Rhomboids', 'Levator Scapulae', 'Latissimus Dorsi'],
    equipment: 'bodyweight',
  }
]
