import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OrphanagesMap from '../screens/OrphanagesMap';
import Orphanage from '../screens/Orphanage';
import SelectMapPosition from '../screens/CreateOrphanage/SelectMapPosition';
import OrphanageData from '../screens/CreateOrphanage/OrphanageData';
import Header from '../components/Header';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen
          name="Orphanage"
          component={Orphanage}
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" showCancel={false} />,
          }}
        />
        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title="Selecione o local no mapa" />,
          }}
        />
        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Dados da casa de acolhimento" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
