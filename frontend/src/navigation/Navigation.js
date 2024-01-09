import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import UserProfileScreen from '../screens/UserProfile/UserProfileScreen';
import CompanyProfileScreen from '../screens/CompanyProfile/CompanyProfileScreeen';

const MainStack = createNativeStackNavigator();

const Navigation = props => {
  return (
    <>
      <NavigationContainer>
        <MainStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'Home'}>
          <MainStack.Screen name="Home" component={HomeScreen} />
          <MainStack.Screen name="UserProfile" component={UserProfileScreen} />
          <MainStack.Screen
            name="CompanyProfile"
            component={CompanyProfileScreen}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
