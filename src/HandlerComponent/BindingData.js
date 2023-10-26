import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

export default class BindingData extends Component {
  textRender = 'Hello React Native 04';
  textLogin = 'Should Login My App';
  state = {
    isLogin: false,
  };

  renderLogin = () => {
    if (this.state.isLogin) {
      return <Text style={styles.txt}>{this.textRender}</Text>;
    }
    return <Text style={styles.txt}>{this.textLogin}</Text>;
  };

  onPressButton = function () {
    console.log('Function this:', this.state.isLogin);
  };
  onPressLogout = () => {
    this.setState({isLogin: false});
    console.log('Logout Press', this.state.isLogin);
  };

  onPressLogin = () => {
    this.setState({isLogin: !this.state.isLogin});
    console.log('Login Press', this.state.isLogin);
  };

  render() {
    console.log('render Run', this.state.isLogin);
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Binding Data Component</Text>
        {/* render if else #1*/}
        {this.renderLogin()}
        {/* render if else #2*/}
        <Text style={styles.txt}>
          {this.state.isLogin ? this.textRender : this.textLogin}
        </Text>
        {this.state.isLogin ? (
          <Text style={styles.txt}>{this.textRender}</Text>
        ) : (
          <Text style={[styles.txt, styles.txtRed]}>{this.textLogin}</Text>
        )}
        <TouchableOpacity style={styles.btn} onPress={this.onPressLogin}>
          <Text style={{color: '#fff'}}>
            {this.state.isLogin ? 'Logout' : 'Login'}
          </Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => this.onPressLogout()}
          underlayColor={'green'}>
          <Text style={{color: '#fff'}}>Logout</Text>
        </TouchableHighlight>
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
  txt: {
    fontSize: 24,
    fontWeight: '700',
  },
  txtRed: {color: 'red'},
  btn: {
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
    marginVertical: 10,
  },
});
