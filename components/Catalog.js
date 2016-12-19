//react
import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  TextInput,
  TouchableHighlight
} from 'react-native';

//redux
import { connect } from 'react-redux';

//styles
import styles from '../style.js'
import {LightText, DarkText} from './TextFormats';

//row component
import CatalogRow from './CatalogRow'

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
        {dummyExercises && dummyExercises.map((movement, idx) => {

          if (movement.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
            return <CatalogRow exercise={movement} key={idx}/>
          }
        })
      }
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

