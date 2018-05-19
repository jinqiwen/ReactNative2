/*这里实现了页面跳转哦！1*/
import React from 'react';
import { AppRegistry } from 'react-native';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={()=>{
                        this.props.navigation.navigate("Details",{
                            'itemId':30,
                             'otherParam':'hahhaha'
                        })
                    }}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details1',
    };

    render() {
        /* 2. Get the param, provide a fallback value if not available */
       /* const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        */
         const {navigation} =this.props;
         const itemId=navigation.getParam('itemId','No-id');
         const  otherParams=navigation.getParam('otherParm','some default value');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/*<Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() =>
                        this.props.navigation.push('Details', {
                            itemId: Math.floor(Math.random() * 100),
                        })}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />*/}
                <Text>itemId:{JSON.stringify(itemId)}</Text>
                <Text>otherParame: {JSON.stringify(otherParams)}</Text>
                <Button title="Go to Details.... again"
                        onPress={()=>{
                            this.props.navigation.push('Details',{
                                itemId:Math.floor(Math.random()*100)
                            })
                        }}/>
                <Button
                    title="Go to Home"
                     onPress={()=>{
                    this.props.navigation.navigate('Home')
                }
                } />
                <Button title=" Go back"
                        onPress={()=>{
                            this.props.navigation.goBack()
                        }}
                 />
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App1 extends React.Component {
    render() {
        return <RootStack />;
    }
}
/*注意：export 的class名字不能相同，否则会出错*/
AppRegistry.registerComponent('ReactNative1', () => App1);
