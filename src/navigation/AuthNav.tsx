import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './navigation.types';
import {memo} from 'react';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../constants';
import MainTab from './MainTab';
import TopDoctor from '../screens/TopDoctor';
import Articles from '../screens/Articles';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {fonts, icons} from '../assets';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const HeaderLeft = (navigation: any) => {
  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <FastImage
        source={icons.back}
        resizeMode="contain"
        style={styles.iconStyle}
      />
    </TouchableOpacity>
  );
};

const HeaderRight = (navigation: any) => {
  return (
    <TouchableOpacity>
      <FastImage
        source={icons.dots}
        resizeMode="contain"
        style={styles.iconStyle}
      />
    </TouchableOpacity>
  );
};

const AuthNav = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {paddingTop: top, backgroundColor: colors.white},
      }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Group
        screenOptions={({navigation}) => ({
          headerShown: true,
          headerLeft: HeaderLeft.bind(this, navigation),
          headerRight: HeaderRight.bind(this, navigation),
          headerTitleStyle:styles.headerTitleStyle,
          headerShadowVisible:false,
          headerTitleAlign:'center'
        })}>
        <Stack.Screen name="TopDoctor" component={TopDoctor} />
        <Stack.Screen name="Articles" component={Articles} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default memo(AuthNav);

const styles = StyleSheet.create({
  iconStyle: {
    width: 28,
    height: 28,
  },
  headerTitleStyle:{
    fontSize:22,
    fontFamily:fonts.poppinsMedium,
  }
});
