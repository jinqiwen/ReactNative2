/*
底部导航的最简单例子（这里防止和app3的冲突，注释了尾部的内容）
*/
import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

/*
export default TabNavigator({
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
});*/
