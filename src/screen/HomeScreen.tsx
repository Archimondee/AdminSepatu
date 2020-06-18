import React, {Component, useContext} from 'react';
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Left,
  Right,
  Body,
} from 'native-base';
import {TouchableOpacity, Text} from 'react-native';
//import ListScreen from './ListScreen';
//import PembelianScreen from './PembelianScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header hasTabs>
        <Left></Left>
        <Body>
          <Text style={{color: 'white'}}>Admin Toko</Text>
        </Body>
        <Right>
          <TouchableOpacity onPress={() => navigation.navigate('Add')}>
            <Icon name="md-add" size={32} color="white" />
          </TouchableOpacity>
        </Right>
      </Header>
      <Tabs>
        <Tab
          heading={
            <TabHeading>
              <Text style={{color: 'white'}}>Menu Barang</Text>
            </TabHeading>
          }>
          {/* <ListScreen navigation={navigation} /> */}
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text style={{color: 'white'}}>Pembelian</Text>
            </TabHeading>
          }>
          {/* <PembelianScreen navigation={navigation} /> */}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default HomeScreen;
