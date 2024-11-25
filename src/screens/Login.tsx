import {memo, useCallback, useLayoutEffect} from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';
import FastImage from 'react-native-fast-image';
import {icons, images} from '../assets';
import {AppDimensions, colors, isIos} from '../constants';
import {Poppins100, Poppins200, Poppins300} from '../components/common/Fonts';
import {useForm} from 'react-hook-form';
import {ScreenProps} from '../navigation/navigation.types';
import ControlledInput from '../components/common/ControlledInput';
import Button from '../components/common/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type loginField = {
  email: string;
  password: string;
};

const Login = ({navigation}: ScreenProps<'Login'>) => {
  const {top} = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      contentStyle: {paddingTop: top, backgroundColor: colors.primary},
    });
  }, []);

  const {control} = useForm<loginField>();

  const goToSignUp = useCallback(() => {
    navigation.navigate('Signup');
  }, [navigation]);

  const goToMainTab = useCallback(() => {
    navigation.navigate('MainTab');
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={GlobalStyles.globalFlex1}
      enabled
      behavior={isIos ? 'padding' : undefined}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        bounces={false}
        contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            GlobalStyles.globalFlex1,
            styles.container,
            GlobalStyles.justifyAround,
          ]}>
          <View style={[GlobalStyles.alignSelf]}>
            <View
              style={[GlobalStyles.fdRow, GlobalStyles.alignCenter, {gap: 12}]}>
              <FastImage
                source={images.heart}
                resizeMode="contain"
                style={styles.imageStyle}
                tintColor={colors.white}
              />
              <Poppins300 style={styles.txtStyle}>HiDoc</Poppins300>
            </View>
            <View style={styles.getStartedStyle}>
              <Poppins200 style={styles.paraStyle}>
                Let's get Started
              </Poppins200>
              <Poppins200 style={styles.newAccountStyle}>
                Create a new Account
              </Poppins200>
            </View>
          </View>
          <View>
            <ControlledInput
              control={control}
              name="email"
              inputConfig={{placeholder: 'Your Email'}}
              leftIcon={icons.email}
            />
            <ControlledInput
              control={control}
              name="password"
              inputConfig={{placeholder: 'Your Password'}}
              leftIcon={icons.password}
            />
            <Button
              buttonStyle={styles.btnStyle}
              textStyle={styles.textStyle}
              title="Login"
              onPress={goToMainTab}
            />
          </View>
          <Poppins100 style={styles.footerText}>
            Have an account?{' '}
            <Poppins300 style={styles.footerText} onPress={goToSignUp}>
              Register
            </Poppins300>
          </Poppins100>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(Login);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  imageStyle: {
    width: AppDimensions.windowWidth / 12,
    height: AppDimensions.windowWidth / 12,
  },
  txtStyle: {
    fontSize: 28,
    color: colors.white,
  },
  getStartedStyle: {
    marginVertical: 16,
    marginLeft: -8,
    gap: 8,
  },
  paraStyle: {
    fontSize: 20,
  },
  newAccountStyle: {
    color: colors.white,
    marginLeft: 2,
  },
  btnStyle: {
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 20,
    height: 53,
  },
  textStyle: {
    color: colors.primary,
  },
  footerText: {
    color: colors.white,
    fontSize: 15,
    alignSelf: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
