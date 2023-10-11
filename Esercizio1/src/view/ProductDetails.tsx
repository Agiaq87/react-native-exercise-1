import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../types';
import {ProductModel} from '../model/ProductModel';

type ProductDetailsProps = StackScreenProps<
  Record<string, object | undefined>,
  'ProductDetails'
>;

export function ProductDetails({route}: ProductDetailsProps) {
  const id = route.params as ProductModel;
  const images =
    id?.images !== undefined ? (
      id?.images.forEach(e => <Image source={{uri: e}} />)
    ) : (
      <Text>Image not available</Text>
    );
  return (
    <View style={styles.container}>
      <Text>{id.title}</Text>
      <Text>{id.price}</Text>
      <View>{images}</View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
  },
});
