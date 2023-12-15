// Header.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import metrics from '../../utils/mertrics';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.images.medium,
  },
  text: {
    color: colors.white,
    fontSize: fonts.size.large,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
});

const Header = ({title = ''}: any) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
