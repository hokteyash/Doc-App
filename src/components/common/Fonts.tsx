import {memo, ReactNode} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {fonts} from '../../assets';
import {colors} from '../../constants';

const Poppins100 = memo(({style, children, ...rest}: TextProps) => {
  return (
    <Text style={[styles.poppins100, style]} {...rest}>
      {children}
    </Text>
  );
});

const Poppins200 = memo(({style, children, ...rest}: TextProps) => {
  return (
    <Text style={[styles.poppins200, style]} {...rest}>
      {children}
    </Text>
  );
});

const Poppins300 = memo(({style, children, ...rest}: TextProps) => {
  return (
    <Text style={[styles.poppins300, style]} {...rest}>
      {children}
    </Text>
  );
});

const Poppins400 = memo(({style, children, ...rest}: TextProps) => {
  return (
    <Text style={[styles.poppins400, style]} {...rest}>
      {children}
    </Text>
  );
});

const Poppins500 = memo(({style, children, ...rest}: TextProps) => {
  return (
    <Text style={[styles.poppins500, style]} {...rest}>
      {children}
    </Text>
  );
});

const styles = StyleSheet.create({
  poppins100: {
    fontFamily: fonts.poppinsRegular,
    color: colors.black,
  },
  poppins200: {
    fontFamily: fonts.poppinsMedium,
    color: colors.black,
  },
  poppins300: {
    fontFamily: fonts.poppinsSemiBold,
    color: colors.black,
  },
  poppins400: {
    fontFamily: fonts.poppinsBold,
    color: colors.black,
  },
  poppins500: {
    fontFamily: fonts.poppinsExtraBold,
    color: colors.black,
  },
});

export {Poppins100, Poppins200, Poppins300, Poppins400, Poppins500};