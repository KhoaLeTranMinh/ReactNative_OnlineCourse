import {StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class BackgroundView extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.backgroundViewColor} /> */}
        <View style={styles.contentHeader}>
          <View style={styles.borderRightConner} />
        </View>

        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceef2',
  },
  // backgroundViewColor: {
  //   ...StyleSheet.absoluteFill,
  //   backgroundColor: '#eceef2',
  // },
  contentHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 80,
  },
  borderRightConner: {
    backgroundColor: '#000',
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: -5,
    right: -10,
  },
});
