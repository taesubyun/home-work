import HomeScreen from './screens/HomeScreen';
import ArroundScreen from './screens/ArroundScreen';
import ProductScreen from './screens/ProductScreen';
import ChatScreen from './screens/ChatScreen';
import MypageScreen from './screens/MypageScreen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarBadge: 10,
          tabBarLabel: '홈',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home-outline" size={27} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Town"
        component={ProductScreen}
        options={{
          tabBarLabel: '동네 생활',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="business-outline" size={27} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Arround"
        component={ArroundScreen}
        options={{
          tabBarLabel: '내 근처',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-compass-outline" size={27} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: '채팅',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="chatbubbles-outline" size={27} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-circle-outline" size={27} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
