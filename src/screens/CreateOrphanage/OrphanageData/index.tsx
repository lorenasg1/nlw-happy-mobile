import React from 'react';
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
} from './styles';
import { Switch } from 'react-native';

const OrphanageData = () => {
  return (
    <Container>
      <Title>Dados da CAI</Title>

      <Label>Nome</Label>
      <Input textAlignVertical="top" />

      <Label>Sobre</Label>
      <Input multiline textAlignVertical="top" style={{ height: 110 }} />

      <Label>WhatsApp</Label>
      <Input textAlignVertical="top" />

      <Label>Fotos</Label>
      <ImagesInput onPress={() => {}}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input multiline textAlignVertical="top" style={{ height: 110 }} />

      <Label>Horário de visitas</Label>
      <Input textAlignVertical="top" />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
        />
      </SwitchContainer>

      <SubmitButton onPress={() => {}}>
        <SubmitButtonText>Cadastrar</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
};

export default OrphanageData;
