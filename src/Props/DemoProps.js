import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CardItem from './CardItem';

export default class DemoProps extends Component {
  listStudent = [
    {name: 'Nguyễn Văn A', age: 18},
    // {name: 'Nguyễn Văn B', age: 19},
    // {name: 'Nguyễn Văn C', age: 20},
    // {name: 'Nguyễn Văn D', age: 21},
    // {name: 'Nguyễn Văn E', age: 22},
    // {name: 'Nguyễn Văn F', age: 23},
  ];

  state = {
    number: 1,
  };

  renderListStudentWithMap = () => {
    return this.listStudent.map((item, index) => {
      const backgroundColor = index % 2 === 0 ? '#bff' : '#eee';
      return (
        <CardItem
          name={item.name}
          age={item.age}
          backgroundColor={backgroundColor}
        />
      );
    });
  };

  onPressButton = () => {
    this.setState({number: this.state.number + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Demo Props Component</Text>
        {/* {this.renderListStudentWithMap()} */}
        <CardItem name={'React Native 04'} age={this.state.number} />
        <Text onPress={this.onPressButton}>Count Up Age</Text>
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
  content: {
    backgroundColor: '#eee',
    borderRadius: 8,
    width: '80%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
  },
  txt: {
    fontSize: 24,
    fontWeight: '700',
  },
});
