import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './Routes';
import Splash from '../screens/Splash';
import Products from '../screens/Products';
import Basket from '../screens/Basket';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const MainNavigation: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Splash}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={Routes.Splash}
          options={{
            headerShown: false,
          }}
          component={Splash}
        />
        <Stack.Screen
          name={Routes.Products}
          options={{
            headerShown: true,
            header: props => (
              <Header {...props} title="Products" testID="Products" />
            ),
          }}
          component={Products}
        />
        <Stack.Screen
          name={Routes.Basket}
          options={{
            headerShown: true,
            header: props => (
              <Header {...props} title="Basket" testID="Basket" />
            ),
          }}
          component={Basket}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
