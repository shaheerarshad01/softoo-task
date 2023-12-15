import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './Routes';
import Splash from '../screens/Splash';
import Products from '../screens/Products';
import Basket from '../screens/Basket';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Splash}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Routes.Splash}
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen
          name={Routes.Products}
          options={{headerShown: false}}
          component={Products}
        />
        <Stack.Screen
          name={Routes.Basket}
          options={{headerShown: false}}
          component={Basket}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
