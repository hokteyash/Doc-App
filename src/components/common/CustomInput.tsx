import {forwardRef, memo, useImperativeHandle, useRef, useState} from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {fonts, icons} from '../../assets';
import GlobalStyles from '../../constants/GlobalStyles';
import {colors} from '../../constants';

interface CustomInputProps extends TextInputProps {
  style?: TextInputProps['style'];
}

export interface CustomInputRef {
  setText: (txt: string) => void;
  getText: () => string;
  clear: () => void;
  setFocus: () => void;
}

const CustomInput = forwardRef<CustomInputRef, CustomInputProps>(
  (props, ref) => {
    const {style, ...rest} = props;
    const [Text, setText] = useState<string>('');
    const TextInputRef = useRef<TextInput | null>(null);

    useImperativeHandle(ref, () => ({
      setText: (txt: string) => {
        setText(txt);
      },
      getText: () => Text,
      clear: () => setText(''),
      setFocus: () => {
        TextInputRef.current?.focus();
      },
    }));
    return (
      <View
        style={[
          GlobalStyles.fdRow,
          GlobalStyles.justifyBetween,
          GlobalStyles.alignCenter,
          styles.container,
        ]}>
        <View style={[GlobalStyles.fdRow, GlobalStyles.alignCenter]}>
          <FastImage
            source={icons.search}
            resizeMode="contain"
            style={styles.iconStyle}
          />
          <TextInput
            ref={TextInputRef}
            style={[styles.inputStyle, style]}
            {...rest}
            onChangeText={setText}
            value={Text}
          />
        </View>
        <FastImage
          source={icons.cross}
          resizeMode="contain"
          style={styles.crossIconStyle}
        />
      </View>
    );
  },
);

export default memo(CustomInput);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.input,
    borderRadius: 8,
    paddingVertical: 1,
    paddingHorizontal:8,
    borderColor: colors.border,
    position: 'relative',
  },
  inputStyle: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 15,
    flexGrow: 1,
    marginTop:5,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  crossIconStyle: {
    width: 14,
    height: 14,
    position: 'absolute',
    right: 8,
  },
});
