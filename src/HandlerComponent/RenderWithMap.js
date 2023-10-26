import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class RenderWithMap extends Component {
  listStudent = [
    {name: 'Nguyễn Văn A', age: 18},
    {name: 'Nguyễn Văn B', age: 19},
    {name: 'Nguyễn Văn C', age: 20},
    {name: 'Nguyễn Văn D', age: 21},
    {name: 'Nguyễn Văn E', age: 22},
    {name: 'Nguyễn Văn F', age: 23},
  ];

  renderListStudent = () => {
    const jsxArray = [];
    for (let index = 0; index < this.listStudent.length; index++) {
      const backgroundColor = index % 2 === 0 ? '#bff' : '#eee';
      const element = (
        <View key={index} style={[styles.content, {backgroundColor}]}>
          <Text style={styles.txt}>Tên: {this.listStudent[index].name}</Text>
          <Text style={styles.txt}>Tuổi: {this.listStudent[index].age}</Text>
        </View>
      );
      jsxArray.push(element);
    }
    return jsxArray;
  };

  renderListStudentWithMap = () => {
    return this.listStudent.map((item, index) => {
      const backgroundColor = index % 2 === 0 ? '#bff' : '#eee';
      return (
        <View key={index} style={[styles.content, {backgroundColor}]}>
          <Text style={styles.txt}>Tên: {item.name}</Text>
          <Text style={styles.txt}>Tuổi: {item.age}</Text>
        </View>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>RenderWithMap</Text>
        {/* <View style={[styles.content, {backgroundColor: '#bff'}]}>
          <Text style={styles.txt}>Tên: {this.listStudent[0].name}</Text>
          <Text style={styles.txt}>Tuổi: {this.listStudent[0].age}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.txt}>Tên: {this.listStudent[1].name}</Text>
          <Text style={styles.txt}>Tuổi: {this.listStudent[1].age}</Text>
        </View>
        <View style={[styles.content, {backgroundColor: '#bff'}]}>
          <Text style={styles.txt}>Tên: {this.listStudent[2].name}</Text>
          <Text style={styles.txt}>Tuổi: {this.listStudent[2].age}</Text>
        </View> */}
        {this.renderListStudentWithMap()}
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
