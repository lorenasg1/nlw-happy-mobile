import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Title,
  Label,
  Input,
  ImagesInput,
  SwitchContainer,
  SubmitButton,
  SubmitButtonText,
  UploadedImagesContainer,
  UploadedImage,
} from './styles';
import { Switch } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import api from '../../../services/api';

interface OrphanageDataParams {
  position: {
    latitude: number;
    longitude: number;
  };
}

const OrphanageData = () => {
  const route = useRoute();
  const params = route.params as OrphanageDataParams;
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  const handleSelectImages = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Vixe, preciso de acesso às suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImages([...images, image]);
  };

  const handleCreateOrphanage = async () => {
    const { latitude, longitude } = params.position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach((image, index) => {
      data.append('images', {
        name: `image_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any);
    });

    await api.post('orphanages', data);

    navigation.navigate('OrphanagesMap');
  };

  return (
    <Container>
      <Title>Dados da Casa de Acolhimento</Title>

      <Label>Nome</Label>
      <Input textAlignVertical="top" value={name} onChangeText={setName} />

      <Label>Sobre</Label>
      <Input
        multiline
        textAlignVertical="top"
        style={{ height: 110 }}
        value={about}
        onChangeText={setAbout}
      />

      {/* <Label>WhatsApp</Label>
      <Input textAlignVertical="top" /> */}

      <Label>Fotos</Label>
      <UploadedImagesContainer>
        {images.map((image) => {
          return <UploadedImage key={image.id} source={{ uri: image }} />;
        })}
      </UploadedImagesContainer>
      <ImagesInput onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input
        multiline
        textAlignVertical="top"
        style={{ height: 110 }}
        value={instructions}
        onChangeText={setInstructions}
      />

      <Label>Horário de visitas</Label>
      <Input
        textAlignVertical="top"
        value={opening_hours}
        onChangeText={setOpeningHours}
      />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </SwitchContainer>

      <SubmitButton onPress={handleCreateOrphanage}>
        <SubmitButtonText>Cadastrar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default OrphanageData;
