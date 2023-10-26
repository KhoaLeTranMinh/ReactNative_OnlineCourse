import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {Component} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import TextInput from './components/TextInput';

export default class LoginUI extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <AntIcon style={styles.logo} name="lock" size={100} color="#6330C2" />
          <Text style={styles.headerText}>Welcome Shoes App</Text>
        </View>
        <View style={styles.loginForm}>
          <TextInput title="Email" placeholder="email@example.com" />
          <TextInput
            title="Password"
            placeholder="*******"
            secureTextEntry
            password
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.textButton}>Forgot password?</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text
              style={styles.footerTextButton}
              onPress={() => this.props.navigation.navigate('RegisterScreen')}>
              Register!
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    paddingTop: 100,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  loginForm: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 80,
  },
  button: {
    backgroundColor: '#6330C2',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
  },
  textButton: {
    color: '#6330C2',
    alignSelf: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footerText: {
    color: '#bbb',
  },
  footerTextButton: {
    color: '#6330C2',
    fontWeight: '600',
  },
});
