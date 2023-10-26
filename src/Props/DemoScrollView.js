import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React, {Component} from 'react';
import CardItem from './CardItem';

export default class DemoScrollView extends Component {
  listStudent = [
    {name: 'Nguyễn Văn A', age: 18},
    {name: 'Nguyễn Văn B', age: 19},
    {name: 'Nguyễn Văn C', age: 20},
    {name: 'Nguyễn Văn D', age: 21},
    {name: 'Nguyễn Văn E', age: 22},
    {name: 'Nguyễn Văn F', age: 23},
    {name: 'Nguyễn Văn G', age: 23},
    {name: 'Nguyễn Văn H', age: 23},
    {name: 'Nguyễn Văn I', age: 23},
    {name: 'Nguyễn Văn K', age: 23},
  ];

  renderListStudentWithMap = () => {
    return this.listStudent.map((item, index) => {
      const backgroundColor = index % 2 === 0 ? '#bff' : '#eee';
      return (
        <CardItem
          key={index}
          name={item.name}
          age={item.age}
          backgroundColor={backgroundColor}
        />
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Demo ScrollView Component</Text>
        <ScrollView
          // style={{flexGrow: 0}}
          // horizontal={true}
          contentContainerStyle={{alignItems: 'center'}}>
          {this.renderListStudentWithMap()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
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
