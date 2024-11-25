import {memo} from 'react';
import {ImageStyle, StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {AppDimensions, colors} from '../../constants';
import FastImage, {FastImageProps, Source} from 'react-native-fast-image';

type StaticProp = {
  icon: number | Source | undefined;
  imageStyle?:FastImageProps['style'],
};
const Amenities = ({icon,imageStyle}: StaticProp) => {
  return (
    <TouchableOpacity style={styles.container}>
      <FastImage
        source={icon}
        resizeMode="contain"
        style={[styles.iconStyle,imageStyle]}
        tintColor={colors.white}
      />
    </TouchableOpacity>
  );
};

export default memo(Amenities);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    height: AppDimensions.windowWidth / 5,
    minWidth:AppDimensions.windowWidth/5,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    width: '50%',
    height: '50%',
  },
});
