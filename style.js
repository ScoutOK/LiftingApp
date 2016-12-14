'use-strict'

import {StyleSheet} from 'react-native';

const darkest = 'midnightblue'
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
    backgroundColor: darkest,
    padding: 5,
  },
  topSpacer: {
    height: 22,
  },
  appTitleCont: {
    flexDirection: 'row',
  },
  appTitle: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
  },
  mainBlock: {
    backgroundColor: middle,
    flex: 5
  },
  actionBar: {
    backgroundColor: darkest,
    padding: 5,
    flexDirection: 'row',
  },
  actionText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  topBottom: {
    flex: 1
  },
  workoutView: {
    backgroundColor: '#eee',
  },
  workoutHead: {
    margin: 10
  },
  woProgCont: {
    backgroundColor: '#666',
    height: 10,
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: darkest,
  },
  woProgBar: {
    backgroundColor: darker,
    borderRadius: 4,
  },
  exerRow: {
    margin: 10,
    shadowColor: '#333',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2},
    borderRadius: 4,
  },
  exerTop: {
    flexDirection: 'row',
    backgroundColor: middle,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderLeftWidth : 3,
    borderLeftColor : darker,
    borderBottomWidth : 2,
    borderBottomColor : darker,
  },
  exerHead: {
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    color: darkest,
  },
  exerName: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 15,
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
    padding: 10
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
  rightTableBorder: {
    borderRightColor: '#888',
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  },
});

module.exports = styles;
