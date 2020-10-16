import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MapEvent, Marker } from 'react-native-maps';

import mapMarkerImg from '../../../assets/images/map-marker.png';

import {
  Container,
  MapViewContainer,
  NextButton,
  NextButtonText,
} from './styles';

const SelectMapPosition = () => {
  const navigation = useNavigation();
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const handleNextScreen = () => {
    navigation.navigate('OrphanageData', { position });
  };

  const handleSelectMapPosition = (event: MapEvent) => {
    setPosition(event.nativeEvent.coordinate);
  };

  return (
    <Container>
      <MapViewContainer
        initialRegion={{
          latitude: -6.2602637,
          longitude: -36.5337723,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </MapViewContainer>

      {position.latitude !== 0 && (
        <NextButton onPress={handleNextScreen}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default SelectMapPosition;
