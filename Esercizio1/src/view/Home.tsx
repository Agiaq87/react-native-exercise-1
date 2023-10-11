import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import Product from '../components/Product';
import {ProductsModel} from '../model/ProductsModel';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export function HomePage({navigation}: Props) {
  const [data, setData] = useState<ProductsModel | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://dummyjson.com/products');
        const json = (await result.json()) as ProductsModel;
        setData(json);
      } catch (e) {
        setData(null);
      }
    };

    fetchData();
  }, []);

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
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const goToSearch = () => navigation.navigate('Search');

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <View style={styles.sectionSearch}>
        <TouchableOpacity onPress={goToSearch}>
          <Text style={{fontSize: 16, padding: 16, fontWeight: 'bold'}}>
            Go to Search
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {data === null ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={data?.products}
            renderItem={items => (
              <TouchableOpacity
                onPress={navigation.navigate('ProductDetails', {id: items.id})}>
                <Product data={items} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, _) => item.id.toString()}
          />
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
