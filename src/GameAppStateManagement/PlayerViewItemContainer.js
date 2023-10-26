import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import PlayerViewItem from './components/PlayerViewItem';
import {connect} from 'react-redux';

class PlayerViewItemContainer extends Component {
  render() {
    const {playerImage, botImage, playerSelectedImage, botSelectedImage} =
      this.props;
    return (
      <View style={styles.playerView}>
        <PlayerViewItem
          playerImage={playerImage}
          playerSelectedImage={playerSelectedImage}
        />
        <PlayerViewItem
          playerImage={botImage}
          playerSelectedImage={botSelectedImage}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    playerImage: state.gameReducer.playerImage,
    botImage: state.gameReducer.botImage,
    playerSelectedImage: state.gameReducer.playerSelected.image,
    botSelectedImage: state.gameReducer.botSelected.image,
  };
};

export default connect(mapStateToProps)(PlayerViewItemContainer);

const styles = StyleSheet.create({
  playerView: {
    flex: 2,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});
