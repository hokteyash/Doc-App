import {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import GlobalStyles from '../../constants/GlobalStyles';
import {colors} from '../../constants';
import {Poppins200} from './Fonts';
import {icons} from '../../assets';

type Item = {
  icon: FastImageProps['source'] | number | undefined;
  title: string;
};

const InformationItem = (props: Item) => {
  const {icon, title} = props;
  return (
    <TouchableOpacity
      style={[
        styles.container,
        GlobalStyles.fdRow,
        GlobalStyles.justifyBetween,
        GlobalStyles.alignCenter,
      ]}>
      <View style={[GlobalStyles.fdRow, GlobalStyles.alignCenter, {gap: 16}]}>
        <FastImage
          source={icon}
          style={styles.icon}
          resizeMode="contain"
          tintColor={colors.primary}
        />
        <Poppins200 style={{fontSize: 16}}>{title}</Poppins200>
      </View>
      <FastImage
        source={icons.go}
        resizeMode="contain"
        style={{width:22,height:22}}
        tintColor={colors.primary}
      />
    </TouchableOpacity>
  );
};

export default memo(InformationItem);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
