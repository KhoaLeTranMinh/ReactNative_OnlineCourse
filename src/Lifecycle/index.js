import {StyleSheet, Text, View} from 'react-native';
import React, {Children, Component} from 'react';
import Child from './Child';

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      text: '',
      number: 0,
    };
    this.onPress = this.onPress.bind(this);
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    this.setState({text: 'Hello RN04'});
    console.log('componentDidMount');
  }

  onPress() {
    this.setState({number: this.state.number + 1});
  }

  render() {
    console.log('render');
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text onPress={this.onPress}>Lifecycle</Text>
        {this.state.number < 4 && <Child text={this.state.text} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
