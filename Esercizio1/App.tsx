import React from 'react';
import {HomePage} from './src/view/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchPage} from './src/view/Search';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage as any} />
        <Tab.Screen name="Search" component={SearchPage as any} />
      </Tab.Navigator>
    </NavigationContainer>
    /*<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage as any} />
        <Stack.Screen name="Search" component={SearchPage as any} />
      </Stack.Navigator>
    </NavigationContainer>*/
  );
}

export default App;
