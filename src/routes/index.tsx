import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from '../screens/OrphanagesMap';
import Orphanage from '../screens/Orphanage';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen name="Orphanage" component={Orphanage} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
