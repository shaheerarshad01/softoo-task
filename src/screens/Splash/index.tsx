import React, {useEffect} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import styles from './splash.style';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';

const Splash = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        setTimeout(async () => {
          navigation.navigate(Routes.Products);
        }, 5000);
      } else {
        Toast.show({
          type: 'error',
          text1: 'Network Failed!',
          text2: 'Please connect to the network.',
        });
      }
    });
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/Splash.png')}
      style={styles.container}
    />
  );
};

export default Splash;
