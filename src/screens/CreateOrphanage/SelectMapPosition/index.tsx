import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Marker } from 'react-native-maps';

import mapMarkerImg from '../../../assets/images/map-marker.png';

import {
  Container,
  MapViewContainer,
  NextButton,
  NextButtonText,
} from './styles';

const SelectMapPosition = () => {
  const navigation = useNavigation();

  const handleNextScreen = () => {
    navigation.navigate('OrphanageData');
  };

  return (
    <Container>
      <MapViewContainer
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarkerImg}
          coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }}
        />
      </MapViewContainer>

      <NextButton onPress={handleNextScreen}>
        <NextButtonText>Próximo</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default SelectMapPosition;
