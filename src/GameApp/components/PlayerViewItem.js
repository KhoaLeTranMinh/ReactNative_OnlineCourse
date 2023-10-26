import {Image, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class PlayerViewItem extends Component {
  render() {
    const {playerImage, playerSelectedImage} = this.props;
    return (
      <View style={styles.playerViewItemContainer}>
        <View style={styles.playerSelectedImageContainer}>
          <Image
            source={playerSelectedImage}
            style={styles.playerSelectedImage}
          />
        </View>
        <View style={styles.triangle} />
        <Image source={playerImage} style={styles.characterImage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  playerViewItemContainer: {
    alignItems: 'center',
  },
  playerSelectedImageContainer: {
    height: 100,
    width: 100,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderColor: '#c0bf2c',
    borderWidth: 3,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerSelectedImage: {
    height: 80,
    width: 80,
  },
  characterImage: {
    height: 100,
    width: 100,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 15,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#c0bf2c',
    marginBottom: 5,
  },
});
