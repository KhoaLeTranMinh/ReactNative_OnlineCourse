import React, {Component} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {Background} from './assets';
import ButtonContainer from './ButtonContainer';
import SelectContainer from './SelectContainer';
import InfoContainer from './InfoContainer';
import PlayerViewItemContainer from './PlayerViewItemContainer';

export default class GameAppStateManagement extends Component {
  render() {
    return (
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.overlay} />
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <PlayerViewItemContainer />
          <SelectContainer />
          <InfoContainer />
          <ButtonContainer />
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
  },
  container: {
    flex: 1,
  },
});

// GameAppStateManagement
//   | PlayerViewItemContainer nhận props: {player, bot}
//      | PlayerViewItem nhận props: {playerImage, playerSelectedImage}
