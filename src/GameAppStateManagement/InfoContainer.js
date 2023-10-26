import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class InfoContainer extends Component {
  render() {
    const {score, times} = this.props;
    return (
      <View style={styles.infoView}>
        <Text style={styles.infoText}>Score: {score}</Text>
        <Text style={styles.infoText}>Times: {times}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    times: state.gameReducer.times,
    score: state.gameReducer.score,
  };
};

export default connect(mapStateToProps)(InfoContainer);

const styles = StyleSheet.create({
  infoView: {
    flex: 1,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#26ddbb',
  },
});
