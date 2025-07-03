import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingStack from './navigation/OnboardingStack';
import MainTabNavigator from './navigation/MainTabNavigator';
import { SettingsProvider } from './contexts/SettingsContext';
import { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    // TODO: Replace with AsyncStorage check
    setIsFirstLaunch(false);
  }, []);

  if (isFirstLaunch === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2C3E91" />
      </View>
    );
  }

  return (
    <SettingsProvider>
      <NavigationContainer>
        {isFirstLaunch ? <OnboardingStack /> : <MainTabNavigator />}
      </NavigationContainer>
    </SettingsProvider>
  );
}
