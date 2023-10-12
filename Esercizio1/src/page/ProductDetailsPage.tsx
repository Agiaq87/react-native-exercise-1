import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProductModel} from '../model/ProductModel';
import {
  borderRadius,
  borderWidth,
  color,
  fontSize,
  fontWeight,
  padding,
  textAlign,
} from '../styles/mainStyles';
import {RootStackParamList} from '../../types';
import {Row} from '../components/Row';

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
          <Row>
            <Text style={[fontSize.title, fontWeight.bold, color.onPrimary]}>
              {data.title}
            </Text>
            <Text
              style={[
                fontSize.subTitle,
                fontWeight.bold,
                color.onPrimary,
                borderWidth.low,
                borderRadius.low,
                color.secondary,
                padding.low,
              ]}>
              {data.price}€
            </Text>
          </Row>
          <Text
            style={[
              fontSize.large,
              fontWeight.medium,
              color.onPrimary,
              padding.medium,
            ]}>
            {data.description}
          </Text>
          <Text style={[color.onPrimary]}>{data.price}</Text>
          {data.images?.length && <Image source={{uri: data.images[0]}} />}
          <Text style={[color.onPrimary, fontSize.medium, fontWeight.medium]}>
            Rating: {data.rating}
          </Text>
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
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#fff',
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
