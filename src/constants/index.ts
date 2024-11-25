import {Dimensions, Platform} from 'react-native';

export const colors = {
  primary: '#52D1C6',
  black: '#000000',
  white: '#ffffff',
  red:'#FF0000',
  input:'#F7F8F8',
  border:'#E5E5E5',
  headerLightPink:'#F3EBFE',
  lightGrey: '##CACACA',
  grey_50: '#969696',
  lightPrimary:'#DCF6F4',
  lightestPrimary:'#ebfffd'
};

export const AppScreens = Object.freeze({
  // auth
  Login: 'Login',
  Signup: 'Signup',
  Home:'Home',
  Messages:'Messages',
  Appointment:'Appointment',
  Profile:'Profile',
  MainTab:'MainTab',
  TopDoctor:'TopDoctor',
  Articles:'Articles',
  All:'All',
  Group:'Group',
  Private:'Private',
  MessageTopTab:'MessageTopTab',
  AppointmentTopTab:'AppointmentTopTab',
  Upcoming:'Upcoming',
  Completed:'Completed',
  Cancelled:'Cancelled',
});

export const AppDimensions = Object.freeze({
  screenHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width,
  windowHeight: Dimensions.get('window').height,
  windowWidth: Dimensions.get('window').width,
});

export const isIos = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';
