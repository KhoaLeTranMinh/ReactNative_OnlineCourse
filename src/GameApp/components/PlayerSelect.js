import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {Scissor} from '../assets';

export default class PlayerSelect extends Component {
  render() {
    const {selectOption, onPress, selectedOption} = this.props;

    // {type:'string', image}

    return (
      <TouchableOpacity
        style={[
          styles.selectItemContainer,
          selectedOption === selectOption.type && styles.selectedItem,
        ]}
        onPress={() => onPress(selectOption)}>
        <Image source={selectOption.image} style={styles.selectItem} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  selectItemContainer: {
    height: 80,
    width: 80,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectItem: {
    height: 60,
    width: 60,
  },
  selectedItem: {
    borderColor: '#c0bf2c',
    borderWidth: 3,
  },
});
