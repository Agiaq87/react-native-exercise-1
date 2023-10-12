import React from 'react';
import {ProductModel} from '../model/ProductModel';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Row} from './Row';
import {Col} from './Col';

export type ProductProps = {
  data?: ProductModel;
};

const Product = ({data}: ProductProps) => {
  return data ? (
    <View style={styles.sectionContainer}>
      <Row>
        <Text style={styles.sectionTitle} numberOfLines={1}>
          {data?.title}
        </Text>
        <Text style={styles.sectionPrice}>{data?.price}€</Text>
      </Row>
      <Row>
        <Col numRows={2}>
          {data?.images !== undefined ? (
            <Image
              style={styles.sectionImage}
              source={{uri: data?.images[0]}}
            />
          ) : (
            <Text>Unavailable image</Text>
          )}
        </Col>
        <Col numRows={2}>
          <Text style={styles.sectionDescription}>{data?.description}</Text>
          <Text style={styles.sectionRating}>Rating: {data?.rating}</Text>
        </Col>
      </Row>

      <View>
        <View style={styles.sectionPriceContainer} />
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
    width: 200,
    height: 200,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    fontSize: 18,
    fontWeight: '400',
  },
  sectionContainer: {
    marginTop: 16,
    marginBottom: 32,
    padding: 8,
    borderWidth: 5,
    backgroundColor: 'grey',
    borderRadius: 20,
  },
  sectionPriceContainer: {
    flex: 2,
    marginHorizontal: 'auto',
  },
  sectionPrice: {
    fontSize: 24,
    paddingLeft: 16,
    paddingRight: 16,
    fontWeight: 'bold',
    backgroundColor: '#aaa',
    borderWidth: 1,
    borderRadius: 20,
  },
  sectionRating: {
    fontSize: 24,
    paddingTop: 16,
  },
});

export default Product;
