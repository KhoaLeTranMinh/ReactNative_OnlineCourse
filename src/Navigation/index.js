import {Text, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntIcon from 'react-native-vector-icons/AntDesign';

class HomeScreen extends Component {
  render() {
    console.log(JSON.stringify(this.props, null, 2));
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>Home Screen</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text onPress={() => this.props.navigation.navigate('Detail')}>
            Move to Detail
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

class SettingScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>Setting Screen</Text>
        <Text onPress={() => this.props.navigation.navigate('Detail')}>
          Move to Detail
        </Text>
      </SafeAreaView>
    );
  }
}
class DetailScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text>Detail Screen</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text onPress={() => this.props.navigation.push('Detail')}>
            Move another Detail
          </Text>
          <Text onPress={() => this.props.navigation.navigate('Home')}>
            Navigate Home
          </Text>
          <Text onPress={() => this.props.navigation.goBack()}>Go back...</Text>
        </View>
      </SafeAreaView>
    );
  }
}

class RootStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}
class SettingStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    );
  }
}

class RootTab extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeTab"
          component={RootStack}
          options={{tabBarIcon: () => <AntIcon name="home" size={20} />}}
        />
        <Tab.Screen
          name="SettingTab"
          component={SettingScreen}
          options={{tabBarIcon: () => <AntIcon name="home" size={20} />}}
        />
      </Tab.Navigator>
    );
  }
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default class RootApp extends Component {
  render() {
    return (
      // <Stack.Navigator screenOptions={{headerShown: false}}>
      //   <Stack.Screen name="RootTab" component={RootTab} />
      //   <Stack.Screen name="Detail" component={DetailScreen} />
      // </Stack.Navigator>
      <RootTab />
    );
  }
}
