import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CounterPage} from './src/page/CounterPage';
import {HomePage} from './src/page/HomePage';
import {ProductDetailsPage} from './src/page/ProductDetailsPage';
import {SearchPage} from './src/page/SearchPage';
import {CartProvider} from './src/hooks/useReducerCart';
import {CartPage} from './src/page/CartPage';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomePage as any} />
          <Tab.Screen name="Search" component={SearchStack as any} />
          <Tab.Screen name="Cart" component={CartStack as any} />
          <Tab.Screen name="Counter" component={CounterPage as any} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
    /*<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage as any} />
        <Stack.Screen name="Search" component={SearchPage as any} />
      </Stack.Navigator>
    </NavigationContainer>*/
  );
}

const Search = createStackNavigator();

export function SearchStack() {
  return (
    <Search.Navigator screenOptions={{headerShown: false}}>
      <Search.Screen name="SearchHome" component={SearchPage as any} />
      <Search.Screen
        name="ProductDetails"
        component={ProductDetailsPage as any}
      />
    </Search.Navigator>
  );
}

const CartNavigator = createStackNavigator();

export function CartStack() {
  return (
    <CartNavigator.Navigator>
      <CartNavigator.Screen name="Cart" component={CartPage as any} />
      <CartNavigator.Screen
        name="ProductDetails"
        component={ProductDetailsPage as any}
      />
    </CartNavigator.Navigator>
  );
}

export default App;
