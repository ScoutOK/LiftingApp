'use-strict'

import {StyleSheet} from 'react-native';

const darkest = 'midnightblue'
const darker = 'steelblue'
const middle = 'skyblue'
const whitish = '#eee'
const blackish = '#151515'

export default styles = StyleSheet.create({
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
    color: whitish,
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
  actionItem: {
    flex: 1,
  },
  actionText: {
    color: whitish,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  topBottom: {

  },
  workoutView: {
    backgroundColor: '#eee',
  },
  workoutHead: {
    margin: 10
  },
  woProgCont: {
    backgroundColor: '#999',
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
    marginBottom: 10,
    marginTop: 10,
    shadowColor: '#333',
    shadowRadius: 4,
    shadowOpacity: .4,
    shadowOffset: {width: 0, height: 5},
    // borderRadius: 4,
  },
  exerTop: {
    flexDirection: 'row',
    backgroundColor: middle,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
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
    // borderBottomRightRadius: 4,
    // borderBottomLeftRadius: 4,
  },
  setHead: {
    borderBottomWidth : 2,
    borderBottomColor : darker,
  },
  setHeadCell: {
    flex: 1,
    padding: 5
  },
  setHeadText: {
    textAlign: 'center',
    flex: 1,
    fontSize:12,
  },
  setRow: {
    flexDirection: 'row',
    flex: 1
  },
  setNum: {
    backgroundColor: darker,
  },
  setNumText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  setCell: {
    flex: 1,
    padding: 10
  },
  setCellText: {
    textAlign: 'center',
    flex: 1
  },
  setFoot: {
    flex: 1,
    backgroundColor: darker,
    flexDirection: 'row',
  },
  setFootLeft: {
    flex: 4,
  },
  setFootContent: {
    flex: 6,
    padding: 5,
  },
  setFootContentText: {
    flex: 1,
    textAlign: 'right',
  },
  setFootRight: {
    flex: 1,
  },
  frontView: {
    backgroundColor: darkest,
    flexDirection: 'column',
    flex: 1,
  },
  frontChoice: {
    paddingLeft: 25,
    paddingRight: 25,
    flex: 1,
    backgroundColor: darker,
    borderColor: darkest,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  majorSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
  },
  minorSeparator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: darker,
  },
  rightTableBorder: {
    borderRightColor: '#888',
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  lightText: {
    color: '#eee',
  },
  darkText: {
    color: blackish,
  },
  larger: {
    fontSize: 25,
  },
  profilePic: {
    height: 150,
    width: 150,
    borderRadius: 75,
    margin: 10,
  },
  centerHoriz: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centerVert: {
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

