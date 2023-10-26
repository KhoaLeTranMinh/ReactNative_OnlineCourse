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
import {Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('không được bỏ trống')
    .email('Email không hợp lệ'),
  password: Yup.string().required('không được bỏ trống'),
  name: Yup.string().required('không được bỏ trống'),
  phone: Yup.string().required('không được bỏ trống'),
});

export default class RegisterFormik extends Component {
  handleSubmit = values => {
    console.log('handleSubmit', values);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AntIcon
          name="left"
          style={{paddingLeft: 20}}
          size={30}
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={styles.header}>
          <AntIcon style={styles.logo} name="lock" size={100} color="#6330C2" />
          <Text style={styles.headerText}>Register Formik</Text>
        </View>
        <Formik
          validationSchema={validationSchema}
          initialValues={{email: '', password: '', name: '', phone: ''}}
          onSubmit={this.handleSubmit}>
          {({
            errors,
            values,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <View style={styles.loginForm}>
                <TextInput
                  title="Email"
                  placeholder="email@example.com"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  errorMsg={errors.email}
                  touched={touched.email}
                />
                <TextInput
                  title="Password"
                  placeholder="*******"
                  secureTextEntry
                  password
                  value={values.password}
                  onChangeText={handleChange('password')}
                  errorMsg={errors.password}
                  onBlur={handleBlur('password')}
                  touched={touched.password}
                />
                <TextInput
                  title="Name"
                  placeholder="Nguyen Van A"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  errorMsg={errors.name}
                  onBlur={handleBlur('name')}
                  touched={touched.name}
                />
                <TextInput
                  title="Phone"
                  placeholder="091-xxx-xxx"
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  errorMsg={errors.phone}
                  onBlur={handleBlur('phone')}
                  touched={touched.phone}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
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
    color: '#fff',
  },
});
