import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default class Button extends Component {
  render() {
    const {title, colors, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={colors}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 1}}
          style={[styles.buttonContainer]}>
          <Text style={styles.buttonText}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    width: 160,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
});
