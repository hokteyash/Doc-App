import {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import GlobalStyles from '../../constants/GlobalStyles';
import {Poppins200} from './Fonts';

interface headerProps {
  title: string;
  icon: FastImageProps['source'];
}

const Header = ({title,icon}:headerProps) => {
  return (
    <View
      style={[
        GlobalStyles.fdRow,
        GlobalStyles.justifyBetween,
        GlobalStyles.alignCenter,
      ]}>
      <Poppins200 style={styles.headingStyle}>{title}</Poppins200>
      <TouchableOpacity>
        <FastImage
          source={icon}
          resizeMode="contain"
          style={styles.iconStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 24,
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
});
