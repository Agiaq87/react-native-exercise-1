import React from 'react';
import {ProductModel} from '../model/ProductModel';
import {Image, ListRenderItemInfo, StyleSheet, Text, View} from 'react-native';

export type ProductProps = {
  data?: ListRenderItemInfo<ProductModel> | undefined;
};

const Product = ({data}: ProductProps) => {
  console.log(`LEGGI QUI -> ${data}`);
  return data ? (
    <View>
      <Image style={styles.sectionImage} source={{uri: data?.item.img[0]}} />
      <Text style={styles.sectionTitle}>{data?.item.title}</Text>
      <Text style={styles.sectionDescription}>{data?.item.description}</Text>
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
});

export default Product;
