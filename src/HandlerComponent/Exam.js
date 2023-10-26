import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import Alto_icon from '../images/Alto_icon.png';
import Alto_0 from '../images/Alto_0.png';

export default class ExamBinding extends Component {
  game = {
    id: 0,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majestic desert, vast and unexplored.\nJoin Alto and his friends and set off on an endless sandboarding journey to discover its secrets. Soar above windswept dunes, traverse thrilling canyons, and explore long-hidden temples in a fantastical place far from home.',
    age: '9+',
    rating: 4.4,
    banner: Alto_0,
    backgroundColor: '#824671CC',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.game.banner} />
        <View
          style={[
            styles.infoContent,
            {backgroundColor: this.game.backgroundColor},
          ]}>
          <Image source={this.game.icon} style={styles.gameIcon} />
          <View style={styles.info}>
            <Text>{this.game.title}</Text>
            <Text>{this.game.subTitle}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343434',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContent: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  gameIcon: {
    width: 80,
    height: 80,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 8,
  },
  info: {
    width: '70%',
  },
});
