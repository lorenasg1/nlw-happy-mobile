import React from 'react';

import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../../assets/images/map-marker.png';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  MapViewContainer,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanageButton,
} from './styles';

const OrphanagesMap = () => {
  const navigation = useNavigation();

  const handleNavigateToOrphanage = () => {
    navigation.navigate('Orphanage');
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
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -6.260392,
            longitude: -36.519739,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanage}>
            <CalloutContainer>
              <CalloutText>Casa Irmã Ananília</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </MapViewContainer>

      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>

        <CreateOrphanageButton>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;
