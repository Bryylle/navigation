import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import FindScreen from '../Screens/FindScreen';
import PostScreen from '../Screens/PostScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const PostTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45'
        }}>
            {children}
        </View>
    </TouchableOpacity >
);


const Tabs = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#fff',
                borderRadius: 15,
                height: 90,
            }
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View stlye={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
                        <Image
                            source={require('../assets/icons/home.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94',
                                marginLeft: 4.5,
                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }} >
                            HOME
                        </Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Chat" component={ChatScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View stlye={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
                        <Image
                            source={require('../assets/icons/chat.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94',
                                marginLeft: 4.5,
                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }} >
                            CHAT
                        </Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Post" component={PostScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/icons/plus.png')}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: '#fff',
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <PostTabBarButton {...props} />
                    )
                }}
            />
            <Tab.Screen name="Find" component={FindScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View stlye={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
                        <Image
                            source={require('../assets/icons/search.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94',
                                marginLeft: 4.5,
                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }} >
                            SEARCH
                        </Text>
                    </View>
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View stlye={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
                        <Image
                            source={require('../assets/icons/account.png')}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#e32f45' : '#748c94',
                                marginLeft: 4.5,
                            }}
                        />
                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }} >
                            PROFILE
                        </Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});


export default Tabs;