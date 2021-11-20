import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
const Tab = createBottomTabNavigator();
import ChatStack from '../StackNav/Chat';
import Contact from '../../screens/Contact';
import Group from '../../screens/Group';
import Like from '../../screens/Like';
import RootStack from '../index';

import ChatIcon from '../../component/Icons/ChatIcon';
import LikeIcon from '../../component/Icons/LikeIcon';
import GroupIcon from '../../component/Icons/GroupIcon';
import ContactIcon from '../../component/Icons/ContactIcon';

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        style: {
          position: 'absolute',
          backgroundColor: '#F3F3F3',
          borderTopWidth: 0,
          bottom: 0,
          height: 70,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 16,
          paddingTop: 10,
          paddingBottom: 5,
          //   elevation:10
        },
        labelStyle: {
          fontSize: 12,
          //   fontFamily: 'Avenir-Heavy',
        },
        tabStyle: {
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
        activeTintColor: '#20639B',
        inactiveTintColor: '#9FA5C0',
        headerShown:false
      }}>
      <Tab.Screen
        name="Group"
        component={Group}
        options={{
          tabBarIcon: ({color}) => <GroupIcon color={color} />,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Like"
        component={Like}
        options={{
          tabBarIcon: ({color}) => <LikeIcon color={color} />,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          tabBarIcon: ({color}) => <ChatIcon color={color} />,
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({color}) => <ContactIcon color={color} />,
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
