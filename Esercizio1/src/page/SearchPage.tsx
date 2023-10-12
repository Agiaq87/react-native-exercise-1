import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Product from '../components/Product';
import {ProductsModel} from '../model/ProductsModel';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';

type Props = StackScreenProps<RootStackParamList, 'Search'>;

export function SearchPage({navigation}: Props) {
  const [data, setData] = useState<ProductsModel | null>(null);

  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://dummyjson.com/products/search?q=${search}`,
        );
        const json = (await result.json()) as ProductsModel;
        setData(json);
      } catch (e) {
        setData(null);
      }
    };

    fetchData();
  }, [search]);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <View style={styles.sectionSearch}>
        <Text style={{fontSize: 16, padding: 16, fontWeight: 'bold'}}>
          Search here:
        </Text>
        <TextInput
          style={styles.sectionSearchInput}
          value={search}
          onChangeText={text => {
            setSearch(text);
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {data === null ? (
          <Text
            style={{
              color: '#fff',
              alignSelf: 'center',
              fontSize: 18,
              padding: 16,
            }}>
            Searching...
          </Text>
        ) : data.products.length ? (
          <FlatList
            data={data?.products}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetails', {id: item.id})
                  }>
                  <Product data={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, _) => item.id.toString()}
          />
        ) : (
          <Text
            style={{
              color: '#fff',
              alignSelf: 'center',
              fontSize: 18,
              padding: 16,
            }}>
            Not found
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionSearch: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#000',
    borderWidth: 5,
    borderTopLeftRadius: 20,
  },
  sectionSearchInput: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#aaa',
    width: '76%',
  },
});
