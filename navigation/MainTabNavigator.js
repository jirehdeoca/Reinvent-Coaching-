import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '../screens/DashboardScreen';
import CourseLibraryScreen from '../screens/CourseLibraryScreen';
import CoachingScreen from '../screens/CoachingScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.charcoal,
        tabBarStyle: { backgroundColor: colors.white, height: 60 },
        tabBarLabelStyle: { fontSize: 12 },
      }}>
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Courses" component={CourseLibraryScreen} />
      <Tab.Screen name="Coaching" component={CoachingScreen} />
      <Tab.Screen name="Community" component={CommunityScreen} />
      <Tab.Screen name="Me" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
