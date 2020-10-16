import React, { useState } from 'react';

import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../../assets/images/map-marker.png';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import {
  Container,
  MapViewContainer,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanageButton,
} from './styles';
import api from '../../services/api';

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const navigation = useNavigation();

  useFocusEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  });

  const handleNavigateToOrphanage = (id: string) => {
    navigation.navigate('Orphanage', { id });
  };

  const handleNavigateToCreateOrphanage = () => {
    navigation.navigate('SelectMapPosition');
  };

  return (
    <Container>
      <MapViewContainer
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -6.260392,
          longitude: -36.519739,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: Number(orphanage.latitude),
                longitude: Number(orphanage.longitude),
              }}
            >
              <Callout
                tooltip
                onPress={() => handleNavigateToOrphanage(orphanage.id)}
              >
                <CalloutContainer>
                  <CalloutText>{orphanage.name}</CalloutText>
                </CalloutContainer>
              </Callout>
            </Marker>
          );
        })}
      </MapViewContainer>

      <Footer>
        <FooterText>{orphanages.length} CAIs encontradas</FooterText>

        <CreateOrphanageButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;
