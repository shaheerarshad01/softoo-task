import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import styles from './products.styles';
import { ProductTypes } from './types';
import { useFetchProductQuery } from './products.api';
import { setProduct } from './products.slice';
import colors from '../../utils/colors';
import ProductCard from '../../components/ProductCard';
import { useAppDispatch } from '../../hooks/redux';
import { addToBasket } from '../../screens/Basket/basket.slice';
import { Routes } from '../../navigation/Routes';

const renderCardContainer = (pair: any, handleAddToBasket: any) => {
  return (
    <View style={styles.cardMain}>
      {pair.map((item: any, index: React.Key | null | undefined) => (
        <View key={index} style={styles.cardContainer}>
          <ProductCard item={item} handleAddToBasket={handleAddToBasket} />
        </View>
      ))}
    </View>
  );
};

const Product = ({ products = [], navigation }: ProductTypes | any) => {
  const [pairs, setPairs] = useState<any[]>([]);

  useEffect(() => {
    const updatedPairs = [];
    for (let i = 0; i < products.length; i += 2) {
      updatedPairs.push(products.slice(i, i + 2));
    }
    setPairs(updatedPairs);
  }, [products]);

  const dispatch = useAppDispatch();

  const handleAddToBasket = (product: any) => {
    dispatch(addToBasket(product));
    navigation.navigate(Routes.Basket);
  };

  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <FlatList
        data={pairs}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item: pair }) => renderCardContainer(pair, handleAddToBasket)}
      />
    </ScrollView>
  );
};

function Products({ navigation }: any) {
  const dispatch = useAppDispatch();
  const { data = [], isLoading, isSuccess } = useFetchProductQuery();

  useEffect(() => {
    if (data.length) {
      dispatch(setProduct(data));
    }
  }, [dispatch, data]);

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={colors.primaryColor} />
    </View>
  );

  const renderError = () => (
    <View style={styles.errorContainer}>
      <Text>Error loading products</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primaryColor} barStyle="light-content" />
      <View style={styles.mainContainer}>
        {isLoading && renderLoading()}
        {!isSuccess && renderError()}
        {isSuccess && <Product products={data ?? []} navigation={navigation} />}
      </View>
    </View>
  );
}

export default Products;
