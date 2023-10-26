import {
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {Background, Bot, Paper, Player, Rock, Scissor} from './assets';
import PlayerViewItem from './components/PlayerViewItem';
import PlayerSelect from './components/PlayerSelect';
import Button from './components/Button';

const selectedOptionConstant = [
  {type: 'rock', image: Rock},
  {type: 'paper', image: Paper},
  {type: 'scissor', image: Scissor},
];

export default class GameApp extends Component {
  state = {
    playerSelected: selectedOptionConstant[0],
    botSelected: selectedOptionConstant[1],
    selectOption: selectedOptionConstant,
    score: 0,
    times: 9,
  };

  onPressSelect = selectedOption => {
    this.setState({playerSelected: selectedOption});
  };

  renderSelectOption = () => {
    return this.state.selectOption.map(item => (
      <PlayerSelect
        key={item.type}
        selectOption={item}
        onPress={this.onPressSelect}
        selectedOption={this.state.playerSelected.type}
      />
    ));
  };

  onPressPlayButton = () => {
    if (this.state.times > 0) {
      const randomBotSelect = setInterval(() => {
        const botSelected =
          selectedOptionConstant[Math.floor(Math.random() * 3)];
        this.setState({botSelected});
      }, 100);
      setTimeout(() => {
        clearInterval(randomBotSelect);
        const {times, score} = this.checkResult();
        this.setState({times, score});
      }, 5000);
    } else {
      Alert.alert(
        'Thông Báo',
        'Bạn đã hết lượt chơi vui lòng ấn "Reset" để chơi lại',
      );
    }
  };

  checkResult = () => {
    const {
      playerSelected: {type: playerSelectedType},
      botSelected: {type: botSelectedType},
      times,
      score,
    } = this.state;
    if (playerSelectedType === botSelectedType) {
      return {times: times - 1, score};
    } else if (
      (playerSelectedType === 'rock' && botSelectedType === 'scissor') ||
      (playerSelectedType === 'scissor' && botSelectedType === 'paper') ||
      (playerSelectedType === 'paper' && botSelectedType === 'rock')
    ) {
      return {times: times + 1, score: score + 1};
    } else {
      return {times: times - 1, score: score - 1};
    }
  };

  onPressResetButton = () => this.setState({times: 9, score: 0});

  render() {
    const {playerSelected, botSelected, times, score} = this.state;
    return (
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.overlay} />
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.playerView}>
            <PlayerViewItem
              playerImage={Player}
              playerSelectedImage={playerSelected.image}
            />
            <PlayerViewItem
              playerImage={Bot}
              playerSelectedImage={botSelected.image}
            />
          </View>
          <View style={styles.selectView}>{this.renderSelectOption()}</View>
          <View style={styles.infoView}>
            <Text style={styles.infoText}>Score: {score}</Text>
            <Text style={styles.infoText}>Times: {times}</Text>
          </View>
          <View style={styles.buttonView}>
            <Button
              title="Play"
              colors={['#ef0a72', '#fec5e3']}
              onPress={this.onPressPlayButton}
            />
            <Button
              title="Reset"
              colors={['#fdad3c', '#fbf40e']}
              onPress={this.onPressResetButton}
            />
          </View>
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
  playerView: {
    flex: 2,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  selectView: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
  infoView: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#26ddbb',
  },
  buttonView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
