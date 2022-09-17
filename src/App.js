import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import UserScreen from './screen/UserScreen';
import AddUserScreen from './screen/AddUserScreen';
import UserProvider from './contexts/UserProvider';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NativeBaseProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="UserScreen" component={UserScreen} />
            <Stack.Screen name="AddUserScreen" component={AddUserScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </NativeBaseProvider>
  );
};

export default App;
