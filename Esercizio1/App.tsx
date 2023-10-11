import React from 'react';
import {HomePage} from './src/view/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductDetails} from './src/view/ProductDetails';
import {NavigationContainer} from '@react-navigation/native';
import {SearchPage} from './src/view/Search';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage as any} />
        <Tab.Screen name="Counter" component={CounterPage as any} />
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

export function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomePage as any} />
      <Stack.Screen name="Search" component={ProductDetails as any} />
    </Stack.Navigator>
  );
}

export default App;
