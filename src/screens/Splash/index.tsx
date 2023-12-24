import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';
import styles from './splash.style';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const Splash = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      await navigation.navigate(Routes.Products);
    }, 5000);
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/Splash.png')}
      style={styles.container}
    />
  );
};

export default Splash;
