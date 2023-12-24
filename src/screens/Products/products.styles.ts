import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.light,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  submitButton: {
    height: 20,
    width: '90%',
    borderRadius: 20,
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  cardMain: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
  },
  cardContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
