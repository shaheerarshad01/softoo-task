import React, {useEffect} from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import styles from './products.styles';
import {ProductTypes} from './types';
import {useFetchProductQuery} from './products.api';
import {setProduct} from './products.slice';
import colors from '../../utils/colors';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import {useAppDispatch} from '../../hooks/redux';
import {addToBasket} from '../../screens/Basket/basket.slice';
import {Routes} from '../../navigation/Routes';

const Product = ({products = [], navigation}: ProductTypes | any) => {
  const dispatch = useAppDispatch();

  const handleAddToBasket = (product: any) => {
    dispatch(addToBasket(product));
    navigation.navigate(Routes.Basket);
  };

  const renderProductCards = () => {
    const pairs = [];
    for (let i = 0; i < products.length; i += 2) {
      pairs.push(products.slice(i, i + 2));
    }

    return (
      <FlatList
        data={pairs}
        keyExtractor={(pair, index) => index.toString()}
        renderItem={({item: pair}) => (
          <View style={styles.cardMain}>
            {pair.map((item: any, index: React.Key | null | undefined) => (
              <View key={index} style={styles.cardContainer}>
                <ProductCard
                  item={item}
                  handleAddToBasket={handleAddToBasket}
                />
              </View>
            ))}
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderProductCards()}
      </ScrollView>
    </View>
  );
};

function Products({navigation}: any) {
  const dispatch = useAppDispatch();
  const {data = [], isLoading, isSuccess} = useFetchProductQuery();

  useEffect(() => {
    if (data.length) {
      dispatch(setProduct(data));
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primaryColor} />
      </View>
    );
  }

  if (!isSuccess) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error loading products</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.primaryColor}
          barStyle="light-content"
        />
        <Header categoryHeader title="Products" navigation={navigation} />
        <View style={styles.mainContainer}>
          <Product products={data ?? []} navigation={navigation} />
        </View>
      </View>
    </>
  );
}

export default Products;
