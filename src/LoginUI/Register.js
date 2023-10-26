import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import TextInput from './components/TextInput';
import axios from 'axios';
import {
  checkRequired,
  emailValidation,
  letterValidation,
  numberValidation,
  rangeValidation,
} from './utils/validator';

export default class LoginUI extends Component {
  state = {
    value: {
      email: '',
      password: '',
      name: '',
      phone: '',
    },
    error: {
      email: '',
      password: '',
      name: '',
      phone: '',
    },
  };

  onChangeText = (value, key) => {
    this.setState({
      value: {...this.state.value, [key]: value},
      error: {...this.state.error, [key]: ''},
    });
    this.validateData(key, value);
  };

  validateData = (key, value) => {
    if (value.trim()) {
      switch (key) {
        case 'email':
          this.setState({
            error: {...this.state.error, [key]: emailValidation(value)},
          });
          break;

        case 'password':
          this.setState({
            error: {
              ...this.state.error,
              [key]: rangeValidation({value, input: key, max: 8, min: 4}),
            },
          });
          break;

        case 'name':
          this.setState({
            error: {
              ...this.state.error,
              [key]: letterValidation({value, input: key}),
            },
          });
          break;

        case 'phone':
          this.setState({
            error: {
              ...this.state.error,
              [key]: numberValidation({value, input: key}),
            },
          });
          break;
      }
    }
  };

  onBlur = (value, key) => {
    const errorMsg = checkRequired(value);
    this.setState({error: {...this.state.error, [key]: errorMsg}});
    this.validateData(key, value);
  };

  checkRequiredAllInput = async () => {
    const {
      email: emailValue,
      name: nameValue,
      password: passwordValue,
      phone: phoneValue,
    } = this.state.value;
    const email = checkRequired(emailValue);
    const name = checkRequired(nameValue);
    const password = checkRequired(passwordValue);
    const phone = checkRequired(phoneValue);
    this.setState({error: {...this.state.error, email, password, name, phone}});
  };

  onSubmit = async () => {
    await this.checkRequiredAllInput();
    const {email, name, password, phone} = this.state.error;
    const isValidData = !email && !name && !password && !phone;

    if (isValidData) {
      console.log('call API');
      try {
        const result = await axios({
          method: 'POST',
          url: 'http://svcy3.myclass.vn/api/Users/signup',
          data: {...this.state.value, gender: true},
        });
      } catch (error) {
        if (error.message.includes('400')) {
          Alert.alert('Email đã được sử dụng');
        }
      }
    }
  };

  render() {
    const {value, error} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <AntIcon
          name="left"
          style={{paddingLeft: 20}}
          size={30}
          onPress={this.props.navigate}
        />
        <View style={styles.header}>
          <AntIcon style={styles.logo} name="lock" size={100} color="#6330C2" />
          <Text style={styles.headerText}>Register</Text>
        </View>
        <View style={styles.loginForm}>
          <TextInput
            onBlur={() => this.onBlur(value.email, 'email')}
            title="Email"
            placeholder="email@example.com"
            value={value.email}
            onChangeText={valueText => this.onChangeText(valueText, 'email')}
            errorMsg={error.email}
          />
          <TextInput
            onBlur={() => this.onBlur(value.password, 'password')}
            title="Password"
            placeholder="*******"
            secureTextEntry
            password
            onChangeText={valueText => this.onChangeText(valueText, 'password')}
            value={value.password}
            errorMsg={error.password}
          />
          <TextInput
            onBlur={() => this.onBlur(value.name, 'name')}
            title="Name"
            placeholder="Nguyen Van A"
            onChangeText={valueText => this.onChangeText(valueText, 'name')}
            value={value.name}
            errorMsg={error.name}
          />
          <TextInput
            onBlur={() => this.onBlur(value.phone, 'phone')}
            title="Phone"
            placeholder="091-xxx-xxx"
            onChangeText={valueText => this.onChangeText(valueText, 'phone')}
            value={value.phone}
            errorMsg={error.phone}
          />
          <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
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
    color: '#fff',
  },
});
