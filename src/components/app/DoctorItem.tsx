import {memo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {AppDimensions, colors} from '../../constants';
import {Poppins100, Poppins200} from '../common/Fonts';
import GlobalStyles from '../../constants/GlobalStyles';

export type doctorProps = {
  id: number;
  name: string;
  specialization: string;
  rating: number;
  distance: string;
  thumbnail_image: number | Source | undefined;
  imageStyle?:ViewStyle;
};

const DoctorItem = (props: doctorProps) => {
  const {name, specialization, distance, rating, thumbnail_image,imageStyle} = props;
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer,imageStyle]}>
        <FastImage
          source={thumbnail_image}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </View>
      <Poppins200 style={styles.nameStyle}>{name}</Poppins200>
      <Poppins100 style={styles.specialistStyle}>{specialization}</Poppins100>
      <View
        style={[
          GlobalStyles.fdRow,
          GlobalStyles.justifyAround,
          styles.footerStyle,
        ]}>
        <Poppins100 style={styles.ratingStyle}>{`★ ${rating}`}</Poppins100>
        <Poppins100 style={styles.distanceStyle}>{distance}</Poppins100>
      </View>
    </View>
  );
};

export default memo(DoctorItem);

const styles = StyleSheet.create({
  container: {
    width: AppDimensions.windowWidth / 2.5,
    borderRadius: 15,
    backgroundColor: colors.input,
    marginRight: 10,
    shadowColor: colors.primary,
    borderColor: colors.primary,
    shadowRadius: 1,
    shadowOffset: {width: 0, height: 1},
    borderWidth: 0.3,
    gap: 8,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D3DAE4',
    alignSelf: 'center',
    overflow: 'hidden',
    marginTop: 16,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  nameStyle: {
    textAlign: 'center',
    fontSize: 15,
  },
  specialistStyle: {
    fontSize: 13,
    textAlign: 'center',
    color: colors.grey_50,
  },
  footerStyle: {
    marginBottom: 8,
  },
  ratingStyle: {
    fontSize: 13,
    color: colors.primary,
  },
  distanceStyle: {
    fontSize: 13,
    color: colors.grey_50,
  },
});
