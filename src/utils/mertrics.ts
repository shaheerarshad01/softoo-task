import {Dimensions} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: height,
  screenHeight: width,
  containerPadding: 30,
  icons: {
    tiny: scale(15),
    small: scale(20),
    medium: scale(30),
    large: scale(45),
    xl: scale(60),
  },
  images: {
    small: scale(20),
    medium: scale(30),
    large: scale(80),
    logo: scale(120),
    fullScreenWidth: moderateScale(width),
    fullScreenHeight: moderateScale(height),
  },
};

const ScreenWidht = Dimensions.get('window').width;
export const Adjust = (num: number) => (num * ScreenWidht) / 375;

export default metrics;
