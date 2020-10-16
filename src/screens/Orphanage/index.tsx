import React from 'react';

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
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItem,
  ScheduleItemBlue,
  ScheduleItemGreen,
  ScheduleText,
  ScheduleTextBlue,
  ScheduleTextGreen,
  ContactButton,
  ContactButtonText,
} from './styles';
import { ScrollView } from 'react-native';

const Orphanage = () => {
  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          <ImageItem
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
            resizeMode="cover"
          />
          <ImageItem
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
            resizeMode="cover"
          />
          <ImageItem
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
            resizeMode="cover"
          />
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>Orf. Esperança</Title>
        <Description>
          Presta assistência a crianças de 06 a 15 anos que se encontre em
          situação de risco e/ou vulnerabilidade social.
        </Description>

        <MapContainer>
          <MapViewContainer
            initialRegion={{
              latitude: -27.2092052,
              longitude: -49.6401092,
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
                latitude: -27.2092052,
                longitude: -49.6401092,
              }}
            />
          </MapViewContainer>

          <RoutesContainer>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>
          Venha como se sentir a vontade e traga muito amor e paciência para
          dar.
        </Description>

        <ScheduleContainer>
          <ScheduleItem>
            <ScheduleItemBlue>
              <Feather name="clock" size={40} color="#2AB5D1" />
              <ScheduleText>
                <ScheduleTextBlue>Segunda à Sexta 8h às 18h</ScheduleTextBlue>
              </ScheduleText>
            </ScheduleItemBlue>
          </ScheduleItem>

          <ScheduleItem>
            <ScheduleItemGreen>
              <Feather name="info" size={40} color="#39CC83" />
              <ScheduleText>
                <ScheduleTextGreen>Atendemos fim de semana</ScheduleTextGreen>
              </ScheduleText>
            </ScheduleItemGreen>
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
