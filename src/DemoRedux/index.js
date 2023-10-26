import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class DemoRedux extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Demo Redux</Text>
        <Text>State From Store: {this.props.number} </Text>

        <TouchableOpacity onPress={this.props.countUpNumber}>
          <Text>Count up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {number: state.countUpReducer.number};
};

const mapDispatchToProps = dispatch => {
  return {
    countUpNumber: () => {
      console.log('click');
      dispatch({type: 'countUp'});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
