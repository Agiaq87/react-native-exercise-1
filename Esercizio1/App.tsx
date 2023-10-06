import React, {useEffect, useState} from 'react';

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {ProductsModel} from './model/ProductsModel';
import Product from './components/Product';

function App(): JSX.Element {
  const [data, setData] = useState<ProductsModel | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://dummyjson.com/products');
        const json = (await result.json()) as ProductsModel;
        console.log(json);
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
        console.log(json);
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

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 16, padding: 8}}>Search here: </Text>
        <TextInput value={search} onChangeText={setSearch}></TextInput>
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
            renderItem={items => <Product data={items} />}
            keyExtractor={(item, _) => item.id.toString()}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default App;
