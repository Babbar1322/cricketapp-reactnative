import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './src/screens/Home';
import Website from './src/screens/Website';
import More from './src/screens/More';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='MainHome' component={Home} />
			<Stack.Screen name='Website' component={Website} />
		</Stack.Navigator>
	);
};
const MoreStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='MoreScreen' component={More} />
			<Stack.Screen name='Website' component={Website} />
		</Stack.Navigator>
	);
};

export default class App extends Component {
	render() {
		return (
			<NavigationContainer>
				<Tab.Navigator shifting={true} sceneAnimationEnabled={true}
					screenOptions={{ tabBarColor: '#337def' }}>
					<Tab.Screen name="Home" component={MainStack}
						options={{
							tabBarLabel: 'Home',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="home" color={color} size={26} />
							),
						}} />
					<Tab.Screen name="More" component={MoreStack}
						options={{
							tabBarLabel: 'More',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons name="format-list-checkbox" size={26} color={color} />
							),
						}} />
				</Tab.Navigator>
			</NavigationContainer>
		);
	};
};