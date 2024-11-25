import {memo} from 'react';
import {Control, Controller, RegisterOptions} from 'react-hook-form';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {Poppins300} from './Fonts';
import {colors} from '../../constants';
import FastImage from 'react-native-fast-image';
import {fonts} from '../../assets';

type InputProps = {
  control: Control<any>;
  name: string;
  style?: ViewStyle;
  validation?: RegisterOptions['validate'];
  inputStyle?: TextInputProps['style'];
  inputConfig?: TextInputProps;
  errorMessage?: any;
  defaultValue?: string;
  required?: any;
  leftIcon?: any;
};

const ControlledInput = (props: InputProps) => {
  const {
    control,
    name,
    style,
    validation,
    inputStyle,
    inputConfig,
    errorMessage,
    defaultValue,
    required = 'This Field is required',
    leftIcon,
  } = props;
  return (
    <View style={[styles.container, style]}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        rules={{validate: validation, required: required}}
        render={({field: {onChange, value}}) => (
          <View style={styles.inputContainer}>
            <FastImage
              source={leftIcon}
              resizeMode="contain"
              style={styles.iconStyle}
            />
            <TextInput
              style={[styles.iStyle, inputStyle]}
              {...inputConfig}
              onChangeText={onChange}
              value={value}
            />
          </View>
        )}
      />
      <Poppins300 style={styles.errorStyle}>{errorMessage}</Poppins300>
    </View>
  );
};

export default memo(ControlledInput);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  errorStyle: {
    fontSize: 12,
    color: colors.red,
  },
  iconStyle: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  iStyle: {
    fontFamily: fonts.poppinsSemiBold,
    fontSize: 17,
    flexGrow: 1,
    flexShrink: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.input,
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 12,
    flexShrink: 1,
  },
});
