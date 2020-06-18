/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  YellowBox,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screen/HomeScreen';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: () => null}}
        component={HomeScreen}
        name="Home"
      />
    </Stack.Navigator>
  );
};

const App = () => {
  YellowBox.ignoreWarnings(['']);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Menu"
          screenOptions={{
            header: () => null,
          }}>
          {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}

          <Stack.Screen name="Menu" component={MenuStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
