import {Text, View, StyleSheet, SectionList} from 'react-native';
import React, {Component} from 'react';
import CardItem from './CardItem';

export default class DemoSectionList extends Component {
  listStudent = [
    {
      title: 'RN 03',
      data: [
        {name: 'Nguyễn Văn A', age: 18},
        {name: 'Nguyễn Văn B', age: 19},
        {name: 'Nguyễn Văn C', age: 20},
      ],
    },
    {
      title: 'RN 04',
      data: [
        {name: 'Nguyễn Văn D', age: 21},
        {name: 'Nguyễn Văn E', age: 22},
        {name: 'Nguyễn Văn F', age: 23},
      ],
    },
    {
      title: 'RN 05',
      data: [
        {name: 'Nguyễn Văn G', age: 23},
        {name: 'Nguyễn Văn H', age: 23},
        {name: 'Nguyễn Văn I', age: 23},
        {name: 'Nguyễn Văn K', age: 23},
      ],
    },
  ];

  renderItem = ({item, index}) => {
    const backgroundColor = index % 2 === 0 ? '#bff' : '#eee';
    return (
      <CardItem
        name={item.name}
        age={item.age}
        backgroundColor={backgroundColor}
      />
    );
  };

  renderSectionHeader = ({section}) => {
    return (
      <View style={styles.content}>
        <Text style={styles.txt}>{section.title}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Demo SectionList Component</Text>
        <SectionList
          sections={this.listStudent}
          renderSectionHeader={this.renderSectionHeader}
          renderItem={this.renderItem}
          stickySectionHeadersEnabled={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  content: {
    backgroundColor: '#ffb',
    borderRadius: 8,
    // width: '80%',
    paddingVertical: 5,
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
