import React from 'react';
import {ProductModel} from '../model/ProductModel';
import {Image, StyleSheet, Text, View} from 'react-native';

const Product = (props?: ProductModel) => {
  console.log(`LEGGI QUI -> ${props}`);
  return props ? (
    <View>
      <Image style={styles.sectionImage} source={{uri: props?.img[0]}} />
      <Text style={styles.sectionTitle}>{props?.title}</Text>
      <Text style={styles.sectionDescription}>{props?.description}</Text>
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
