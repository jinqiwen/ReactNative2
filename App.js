/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'Home'
        }
    }
  render() {
    return (
        <View style={styles.container}>
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Home'}
                    title="Home"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./icon_tabbar_homepage.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./icon_tabbar_homepage_selected.png")} />}
                    onPress={() => this.setState({ selectedTab: 'Home' })}>
                    <View style={styles.page1}><Text>11111</Text></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="profile"
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.selectedTabText}
                    renderIcon={() => <Image style={styles.icon} source={require("./icon_tabbar_merchant_normal.png")} />}
                    renderSelectedIcon={() => <Image style={styles.icon} source={require("./icon_tabbar_merchant_selected.png")} />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <View style={styles.page2}><Text>22222</Text></View>
                </TabNavigator.Item>

            </TabNavigator>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#F5FCFF'
    },
    page1:{
        flex:1,
        backgroundColor:'#63B8FF'
    },
    page2:{
        flex:1,
        backgroundColor:'#FF0000'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    tabText:{
        color:'#000000',
        fontSize:10
    },
    selectedTabText:{
        color:'#D81E06'
    },
    icon:{
        width:20,
        height:20
    }
});
