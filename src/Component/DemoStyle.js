/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class DemoStyle extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 50, paddingBottom: 50}}>
        <Text>Demo Style Component</Text>
        <View
          style={{
            flex: 1,
            // flexDirection: 'row',
            // justifyContent: 'center',
            // alignItems: 'flex-end',
            // paddingTop: 15,
            // paddingBottom: 15,
          }}>
          <View style={[styles.box, styles.boxPurple]} />
          <View style={{flexDirection: 'row'}}>
            <View style={styles.box} />
            <View style={styles.box} />
          </View>
          <View style={styles.box} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#bfb',
    width: 100,
    height: 100,
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: 'grey',
  },
  boxPurple: {backgroundColor: '#bbf'},
});
