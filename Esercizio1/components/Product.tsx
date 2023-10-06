import React from 'react';
import {ProductModel} from '../model/ProductModel';
import {Image, ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';

export type ProductProps = {
  data?: ListRenderItemInfo<ProductModel> | undefined;
};

const Product = ({data}: ProductProps) => {
  console.log(`LEGGI QUI -> ${data?.item.img}`);
  return data ? (
    <View style={styles.sectionContainer}>
      {data?.item.img !== undefined ? (
        <Image style={styles.sectionImage} source={{uri: data?.item.img[0]}} />
      ) : (
        <Text>Unavailable image</Text>
      )}
      <Text style={styles.sectionTitle}>{data?.item.title}</Text>
      <Text style={styles.sectionDescription}>{data?.item.description}</Text>
      <View style={styles.sectionPriceContainer}>
        <Text style={styles.sectionPrice}>Price: {data?.item.price}€</Text>
        <Text style={styles.sectionPrice}>Rating: {data?.item.rating}</Text>
      </View>
    </View>
  ) : (
    <View>
      <Text style={styles.sectionTitle}>Nothing to show</Text>
      <Text style={styles.sectionDescription}>Try to reload page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionImage: {
    width: 50,
    height: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  sectionContainer: {
    margin: 16,
    padding: 16,
    borderWidth: 5,
    backgroundColor: 'grey',
    borderRadius: 20,
  },
  sectionPriceContainer: {
    flexDirection: 'row',
  },
  sectionPrice: {
    fontSize: 18,
    padding: 16,
    fontWeight: 'bold',
  },
});

export default Product;
