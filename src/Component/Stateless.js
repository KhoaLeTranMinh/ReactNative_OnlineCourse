/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const StateLess = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: '700', textAlign: 'center'}}>
        Hello React Native Application StateLess Component
      </Text>
    </View>
  );
};

export default StateLess;
