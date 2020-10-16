import styled from 'styled-components/native';
import { Image, View, ScrollView, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  height: 240;
`;

export const ImageItem = styled.Image`
  width: ${Dimensions.get('window').width};
  height: 240px;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  color: #4d6f80;
  font-size: 30;
  font-family: 'Nunito_700Bold';
`;

export const Description = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border: 1.2px solid #b3dae2;
  margin-top: 40px;
  background: #e6f7fb;
`;

export const MapViewContainer = styled(MapView)`
  width: 100%;
  height: 150px;
`;

export const RoutesContainer = styled.View`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #0089a5;
`;

export const Separator = styled.View`
  height: 0.8px;
  width: 100%;
  background: #d3e2e6;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleItem = styled.View`
  width: 48%;
`;

export const ScheduleItemBlue = styled.View`
  background: #e6f7fb;
  border: 1px solid #b3dae2;
  border-radius: 20px;
  padding: 20px;
`;

export const ScheduleItemGreen = styled.View`
  background: #edfff6;
  border: 1px solid #a1e9c5;
  border-radius: 20px;
  padding: 20px;
  padding-bottom: 44px;
`;

export const ScheduleText = styled.Text`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
`;

export const ScheduleTextBlue = styled.Text`
  color: #5c8599;
`;

export const ScheduleTextGreen = styled.Text`
  color: #37c77f;
`;

export const ContactButton = styled(RectButton)`
  background: #3cdc8c;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 40px;
`;

export const ContactButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;
