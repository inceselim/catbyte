import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//
//
import { Provider } from 'react-redux';
import store from '../redux/store';


//
//Pages
import HomePage from './HomePage';
import DetailPage from './DetailPage';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Detail" component={DetailPage} options={{ title: 'Detail' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
