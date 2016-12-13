'use-strict'

import {StyleSheet} from 'react-native';

const darker = 'steelblue'
const middle = 'skyblue'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: middle,
  },
  topBar: {
    backgroundColor: darker,
    padding: 5,
  },
  topSpacer: {
    height: 22,
  },
  mainBlock: {
    backgroundColor: middle,
    flex: 5
  },
  actionBar: {
    backgroundColor: darker,
    padding: 5,
  },
  topBottom: {
    flex: 1
  },
  workoutView: {
    backgroundColor: '#eee',
  },
  woProgress: {
    backgroundColor: '#333',
    height: 10,
  },
  exerRow: {
    margin: 10,
    shadowColor: '#333',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2},
    borderRadius: 4,
  },
  exerciseHead: {
    fontWeight: 'bold',
  },
  exerTop: {
    backgroundColor: middle,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    padding: 5,
    borderLeftWidth : 3,
    borderLeftColor : darker,
    borderBottomWidth : 2,
    borderBottomColor : darker,
  },
  setTable: {
    borderRightWidth : StyleSheet.hairlineWidth,
    borderLeftWidth : 3,
    borderRightColor : '#888',
    borderLeftColor : darker,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  setHead: {
    borderBottomWidth : 2,
    borderBottomColor : darker,
  },
  setHeadText: {
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  setRow: {
    flexDirection: 'row',
    flex: 1
  },
  setCell: {
    flex: 1,
    padding: 5
  },
  setCellText: {
    textAlign: 'center',
    flex: 1
  },
  majorSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },
  minorSeparator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#888',
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  },
});

module.exports = styles;
