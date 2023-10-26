/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StateFull from './src/Component/Statefull';
import StateLess from './src/Component/Stateless';
import DemoImage from './src/Component/DemoImage';
import DemoInput from './src/Component/DemoTextInput';
import DemoStyle from './src/Component/DemoStyle';
import Exam from './src/Component/Exam';
import BindingData from './src/HandlerComponent/BindingData';
import ExamBinding from './src/HandlerComponent/Exam';
import RenderWithMap from './src/HandlerComponent/RenderWithMap';
import DemoProps from './src/Props/DemoProps';
import DemoScrollView from './src/Props/DemoScrollView';
import DemoFlatList from './src/Props/DemoFlatList';
import DemoSectionList from './src/Props/DemoSection';
import ExamRenderMap from './src/Props/ExamRenderMap';
import ExamRenderFlatList from './src/Props/ExamRenderFlatlist';
import GameApp from './src/GameApp';
import GameAppStateManagement from './src/GameAppStateManagement';
import {Provider} from 'react-redux';
import rootStore from './src/redux/rootStore';
import DemoRedux from './src/DemoRedux';
import Lifecycle from './src/Lifecycle';
import DemoCallAPI from './src/DemoCallAPI';
import LoginScreen from './src/LoginUI';
import RootApp from './src/Navigation';

const App = () => {
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        {/* <StateFull />
      <StateLess /> */}
        {/* <DemoImage /> */}
        {/* <DemoInput /> */}
        {/* <DemoStyle /> */}
        {/* <Exam /> */}
        {/* <BindingData /> */}
        {/* <RenderWithMap /> */}
        {/* <DemoProps /> */}
        {/* <DemoScrollView /> */}
        {/* <DemoFlatList /> */}
        {/* <DemoSectionList /> */}
        {/* <ExamRenderMap /> */}
        {/* <ExamRenderFlatList /> */}
        <GameApp />
        {/* <GameAppStateManagement /> */}
        {/* <Lifecycle /> */}
        {/* <DemoRedux /> */}
        {/* <DemoCallAPI /> */}
        {/* <LoginScreen /> */}
        {/* <RootApp /> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
