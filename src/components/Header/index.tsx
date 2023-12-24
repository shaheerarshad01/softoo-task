// Header.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor:colors.primaryColor
  },
  text: {
    color: colors.white,
    fontSize: fonts.size.large,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
});

const Header = ({title = '', testID}: any) => {
  return (
    <View testID={testID} style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;
