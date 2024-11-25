import {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {Poppins200, Poppins300} from '../common/Fonts';
import {colors} from '../../constants';

type Item = {
  icon: FastImageProps['source'] | number | undefined;
  title: string;
  value: string;
  isNotBorder: boolean;
};

const ProfileHealthItem = (props: Item) => {
  const {icon, title, value, isNotBorder} = props;
  return (
    <View
      style={
        isNotBorder
          ? [styles.container, {borderRightWidth: 0}]
          : styles.container
      }>
      <FastImage source={icon} style={styles.icon}/>
      <Poppins200 style={styles.titleStyle}>{title}</Poppins200>
      <Poppins300 style={styles.valueStyle}>{value}</Poppins300>
    </View>
  );
};

export default memo(ProfileHealthItem);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    borderRightWidth: 2,
    borderRightColor: colors.white,
    paddingHorizontal: 16,
    marginRight: 16,
  },
  icon: {
    width: 50,
    height: 50,
  },
  titleStyle: {
    color: colors.white,
  },
  valueStyle: {
    fontSize: 18,
    color: colors.white,
  },
});
