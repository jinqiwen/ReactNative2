/*这里实现了页面跳转哦！1*/
import React from 'react';
import { AppRegistry,Component } from 'react-native';
import { Button, View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import app2 from './App2'

AppRegistry.registerComponent('ReactNative1', () => app2);
