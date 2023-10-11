import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProductModel} from '../model/ProductModel';
import {color, fontSize, fontWeight, textAlign} from '../styles/mainStyles';
import { RootStackParamList } from '../../types';

type ProductDetailsProps = StackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

export function ProductDetailsPage({route}: ProductDetailsProps) {
  const id = route.params?.id;

  console.log(id);

  const [data, setData] = useState<ProductModel | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const r = await fetch(`https://dummyjson.com/products/${id}`);
        const j = (await r.json()) as ProductModel;
        console.log(`LEGGI QUI -> `, j);
        setData(j);
      } catch (e) {
        setData(null);
      }
    };

    fetchData();
  }, [id]);

  return (
    <View style={[styles.container, color.primary]}>
      {data ? (
        <View>
          <Text style={[color.onPrimary]}>{data.title}</Text>
          <Text style={[color.onPrimary]}>{data.price}</Text>
          {data.images?.length && <Image source={{uri: data.images[0]}} />}
          <Text style={[color.onPrimary]}>{data.rating}</Text>
        </View>
      ) : (
        <Text
          style={[
            fontSize.large,
            fontWeight.bold,
            textAlign.center,
            color.onPrimary,
          ]}>
          No product founded
        </Text>
      )}
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
