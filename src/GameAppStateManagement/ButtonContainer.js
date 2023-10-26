import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import Button from './components/Button';
import {connect} from 'react-redux';
import {
  checkResultGameRockPaperScissor,
  playGameRockPaperScissor,
  resetGameRockPaperScissor,
} from '../redux/actions/gameAction';

class ButtonContainer extends Component {
  onPressPlayButtonLocal = () => {
    const randomBotSelect = setInterval(() => {
      this.props.onPressPlayButton();
    }, 100);

    setTimeout(() => {
      clearInterval(randomBotSelect);
      this.props.checkResult();
    }, 2000);
  };

  render() {
    const {onPressResetButton} = this.props;
    return (
      <View style={styles.buttonView}>
        <Button
          title="Play"
          colors={['#ef0a72', '#fec5e3']}
          onPress={this.onPressPlayButtonLocal}
        />
        <Button
          title="Reset"
          colors={['#fdad3c', '#fbf40e']}
          onPress={onPressResetButton}
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPressPlayButton: () => dispatch(playGameRockPaperScissor()),
    onPressResetButton: () => dispatch(resetGameRockPaperScissor()),
    checkResult: () => dispatch(checkResultGameRockPaperScissor()),
  };
};

export default connect(null, mapDispatchToProps)(ButtonContainer);

const styles = StyleSheet.create({
  buttonView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
