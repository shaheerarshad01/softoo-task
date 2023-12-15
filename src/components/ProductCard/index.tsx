import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';
import {Routes} from '../../navigation/Routes';

const ProductCard = ({navigation, item, handleAddToBasket}: any) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topCard}>
        <View style={styles.Container}>
          <Text style={styles.productName}>{item.name}</Text>
        </View>
      </View>
      <Image source={{uri: item?.img}} style={styles.productImage} />
      <Text style={styles.actualPrice}>PRICE: {item.price}</Text>
      <Text style={styles.actualPrice}>COLOR: {item.colour}</Text>
      <View style={styles.shareContainer}>
        <TouchableOpacity
          onPress={() => handleAddToBasket(item)}
          style={styles.basketContainer}>
          <Text style={[styles.productName, {color: colors.white}]}>
            Add To Basket
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  badgeContainer: {
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    padding: 5,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
  Container: {
    borderRadius: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  heartBackground: {
    backgroundColor: colors.light,
    borderRadius: 15,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartIcon: {
    width: 12,
    height: 12,
  },
  productImage: {
    width: '100%',
    height: metrics.screenWidth * 0.24,
    borderBottomColor: colors.lightBackground,
    borderBottomWidth: 1,
  },
  productName: {
    fontSize: 10,
    paddingHorizontal: 10,
    paddingTop: 2,
    color: colors.backgroundColor,
  },
  actualPrice: {
    fontSize: 14,
    color: colors.textColor,
    paddingLeft: 10,
  },
  shippingCharges: {
    fontSize: 10,
    color: 'gray',
    paddingLeft: 10,
  },
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  shareBackground: {
    backgroundColor: colors.lightBackground,
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareIcon: {
    width: 14,
    height: 14,
  },
  shareText: {
    color: 'white',
    fontSize: 14,
  },
  basketContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default ProductCard;
