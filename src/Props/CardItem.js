import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class CardItem extends Component {
  render() {
    console.log('render CardItem');
    const {name, age, backgroundColor} = this.props;
    return (
      <View style={[styles.content, {backgroundColor}]}>
        <Text style={styles.txt}>Tên: {name}</Text>
        <Text style={styles.txt}>Tuổi: {age}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#eee',
    borderRadius: 8,
    // width: '80%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
  },
  txt: {
    fontSize: 24,
    fontWeight: '700',
  },
});
