import React from 'react';
import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ArroundScreen from './screens/ArroundScreen';
import ChatScreen from './screens/ChatScreen';
import MypageScreen from './screens/MypageScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{tabBarActiveTintColor: 'black'}}>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
            tabBarBadge: 10,
            tabBarLabel: '홈',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="ios-home-outline" size={27} color="black" />
            ),
          }}
          component={HomeScreen}
        />

        <Stack.Screen
          name="제품"
          options={{
            // headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Ionicons name="business-outline" size={27} color="black" />
            ),
          }}
          component={ProductScreen}
        />

        <Stack.Screen
          name="내 근처"
          options={{
            tabBarLabel: '내 근처',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="ios-compass-outline" size={27} color="black" />
            ),
          }}
          component={ArroundScreen}
        />
        <Stack.Screen
          name="채팅"
          options={{
            tabBarLabel: '채팅',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="chatbubbles-outline" size={27} color="black" />
            ),
          }}
          component={ChatScreen}
        />
        <Stack.Screen
          name="마이페이지"
          options={{
            tabBarLabel: '마이페이지',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person-circle-outline" size={27} color="black" />
            ),
          }}
          component={MypageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
