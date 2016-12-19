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
  catalogDetails (exercise, bool) {
  if (bool) {
    return (
      <View style={styles.catalogDrop}>
        <View>
          <LightText>Exercise type: {exercise.exerciseType}</LightText>
        </View>
        <View>
          <LightText>Main muscle: {exercise.mainMuscle}</LightText>
        </View>
      </View>
    )
  }

  }

  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(dummyExercises),
      search: '',
      showDetails: false,
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
            let showDetails = true;
            console.log(this.state.search)
            if(this.state.search.toLowerCase() == exercise.name.substring(0, searchLength).toLowerCase()) {
              return (
                <View>
                  <View style={styles.catalogRow}>
                    <View style={styles.flex3}>
                      <Text>{exercise.name}</Text>
                    </View>
                    <View style={styles.flex1} onPress={()=>(showDetails = true)}>
                      <Text>Details</Text>
                    </View>
                    <View style={styles.flex1}>
                      <Text>Add</Text>
                    </View>
                  </View>
                  {this.catalogDetails(exercise, showDetails)}
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
  },
  {
    name: 'Bicep Curl',
    exerciseType: 'pull',
    mainMuscle: 'Biceps Brachii',
    assistanceMuscles: ['Brachialis', 'Brachioradialis'],
    equipment: 'dumbbell',
  }
]
