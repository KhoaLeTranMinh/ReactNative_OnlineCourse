import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import PlayerSelect from './components/PlayerSelect';
import {connect} from 'react-redux';
import {selectOptionRockPaperScissor} from '../redux/actions/gameAction';

class SelectContainer extends Component {
  renderSelectOption = () => {
    return this.props.selectOption.map(item => (
      <PlayerSelect
        key={item.type}
        selectOption={item}
        onPress={() => this.props.dispatch(selectOptionRockPaperScissor(item))}
        selectedOption={this.props.selectedOption}
      />
    ));
  };

  render() {
    return <View style={styles.selectView}>{this.renderSelectOption()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    selectOption: state.gameReducer.selectOption,
    selectedOption: state.gameReducer.playerSelected.type,
  };
};

const mapDispatchToPRops = dispatch => {
  return {
    onPressSelectItem: selectedItem =>
      dispatch({type: 'PLAYER_SELECT', payload: selectedItem}),
  };
};

export default connect(mapStateToProps)(SelectContainer);

const styles = StyleSheet.create({
  selectView: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
});
