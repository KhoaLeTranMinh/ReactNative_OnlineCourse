/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class DemoInput extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Demo Text Input Component</Text>
        <TextInput
          placeholder="Username"
          style={{
            width: '70%',
            backgroundColor: '#eee',
            fontSize: 30,
            borderWidth: 1,
            borderRadius: 8,
            paddingLeft: 5,
          }}
        />
      </View>
    );
  }
}
