import React from 'react';
import {View, Text, Button, FlatList, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromBasket, updateQuantity} from './basket.slice';
import styles from './basket.styles';
import colors from '../../utils/colors';

const BasketItemCard = ({item, handleUpdate, handleRemove}: any) => (
  <View style={styles.cardContainer}>
    <Text style={styles.productName}>
      {item.productName} - ${item.price}
    </Text>
    <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="-"
        onPress={() => handleUpdate(item.productId, item.quantity - 1)}
      />
      <Button
        title="+"
        onPress={() => handleUpdate(item.productId, item.quantity + 1)}
      />
      <Button title="Remove" onPress={() => handleRemove(item.productId)} />
    </View>
  </View>
);

function Basket({navigation}: any) {
  const dispatch = useDispatch();
  const basket = useSelector((state: any) => state.basket);

  const handleRemoveFromBasket = (productId: number) => {
    dispatch(removeFromBasket(productId));
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    dispatch(updateQuantity({productId, newQuantity}));
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryColor}
        barStyle="light-content"
      />
      <View style={styles.mainContainer}>
        <FlatList
          data={basket}
          keyExtractor={item => item.productId.toString()}
          renderItem={({item}) => (
            <BasketItemCard
              item={item}
              handleUpdate={handleUpdateQuantity}
              handleRemove={handleRemoveFromBasket}
            />
          )}
        />
      </View>
    </View>
  );
}

export default Basket;
