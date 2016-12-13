'use-strict'

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'skyblue',
  },
  topBar: {
    backgroundColor: 'steelblue',
    padding: 5
  },
  topSpacer: {
    height: 22,
  },
  mainBlock: {
    backgroundColor: 'skyblue',
  },
  actionBar: {
    backgroundColor: 'steelblue',
    padding: 5
  },
  topBottom: {
    flex: 1
  },
  workoutView: {
    backgroundColor: '#eee',
    padding: 10
  },
  woProgress: {
    backgroundColor: '#333',
    height: 10,
  }
});

module.exports = styles;
