import {Text, View} from 'react-native';
import React, {Component, PureComponent} from 'react';

export default class Child extends Component {
  // shouldComponentUpdate(nextProps, nextStates) {
  //   // console.log('shouldComponentUpdate Child');
  //   // if (nextProps.number > 3) {
  //   return true;
  //   // }
  //   // return false;
  // }

  // props: 0 => 1

  // componentDidUpdate() {
  //   console.log('componentDidUpdate Child');
  // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   this.checkNetWork = setInterval(() => {
  //     console.log('check network');
  //   }, 100);
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.checkNetWork);
  }
  render() {
    console.log('render Child Component');
    return (
      <View>
        <Text>Child Props Text: {this.props.text}</Text>
      </View>
    );
  }
}
