import React, { useEffect, useState } from 'react';

import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarkerImg from '../../assets/images/map-marker.png';
import { RectButton } from 'react-native-gesture-handler';

import {
  Container,
  ImagesContainer,
  ImageItem,
  DetailsContainer,
  Title,
  Description,
  MapContainer,
  MapViewContainer,
  RoutesButton,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItem,
  ScheduleItemBlue,
  ScheduleItemGreen,
  ScheduleItemRed,
  ScheduleText,
  ScheduleTextBlue,
  ScheduleTextGreen,
  ScheduleTextRed,
  ContactButton,
  ContactButtonText,
} from './styles';
import { Linking, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';

interface OrphanageRouteParams {
  id: string;
}

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: string;
    url: string;
  }>;
}

const Orphanage = () => {
  const route = useRoute();
  const [orphanage, setOrphanage] = useState<Orphanage>();

  const params = route.params as OrphanageRouteParams;

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return (
      <Container>
        <Description>Carregando...</Description>
      </Container>
    );
  }

  const handleOpenRouteOnGoogleMaps = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`
    );
  };

  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {orphanage.images.map((image) => {
            return (
              <ImageItem
                key={image.id}
                source={{
                  uri: image.url,
                }}
                resizeMode="cover"
              />
            );
          })}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>

        <MapContainer>
          <MapViewContainer
            initialRegion={{
              latitude: Number(orphanage.latitude),
              longitude: Number(orphanage.longitude),
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: Number(orphanage.latitude),
                longitude: Number(orphanage.longitude),
              }}
            />
          </MapViewContainer>

          <RoutesButton onPress={handleOpenRouteOnGoogleMaps}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesButton>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItem>
            <ScheduleItemBlue>
              <Feather name="clock" size={40} color="#2AB5D1" />
              <ScheduleText>
                <ScheduleTextBlue>{orphanage.opening_hours}</ScheduleTextBlue>
              </ScheduleText>
            </ScheduleItemBlue>
          </ScheduleItem>

          <ScheduleItem>
            {orphanage.open_on_weekends ? (
              <ScheduleItemGreen>
                <Feather name="info" size={40} color="#39CC83" />
                <ScheduleText>
                  <ScheduleTextGreen>Atendemos fim de semana</ScheduleTextGreen>
                </ScheduleText>
              </ScheduleItemGreen>
            ) : (
              <ScheduleItemRed>
                <Feather name="info" size={40} color="#39CC83" />
                <ScheduleText>
                  <ScheduleTextRed>Não atendemos fim de semana</ScheduleTextRed>
                </ScheduleText>
              </ScheduleItemRed>
            )}
          </ScheduleItem>
        </ScheduleContainer>

        <ContactButton>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
};

export default Orphanage;
