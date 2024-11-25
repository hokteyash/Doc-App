import {memo} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {colors} from '../../constants';
import {fonts} from '../../assets';

type buttonProps = {
  title: string;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
};

const Button: React.FC<buttonProps> = props => {
  const {title, buttonStyle, textStyle, onPress} = props;
  return (
    <TouchableOpacity style={[styles.Button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.txtStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  Button: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1,
    borderRadius: 5,
    marginVertical: 10,
    height: 45,
    overflow: 'hidden',
  },
  txtStyle: {
    color: colors.white,
    flexShrink: 1,
    fontFamily: fonts.poppinsBold,
    fontSize: 17,
  },
});
