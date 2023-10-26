import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';

export default class CardGameItem extends Component {
  render() {
    const {backgroundColor, icon, title, subTitle} = this.props;
    return (
      <View style={[styles.containerGame, {backgroundColor}]}>
        <Image source={icon} style={styles.iconGame} />
        <View style={styles.infoGame}>
          <Text>{title}</Text>
          <Text>{subTitle}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerGame: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  iconGame: {
    height: 80,
    width: 80,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  infoGame: {
    width: '70%',
    marginLeft: 20,
  },
});
