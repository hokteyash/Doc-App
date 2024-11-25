import {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {doctorProps} from './DoctorItem';
import {AppDimensions, colors} from '../../constants';
import FastImage from 'react-native-fast-image';
import {Poppins200} from '../common/Fonts';

const TopDoctorItem = (props: doctorProps) => {
  const {name, distance, rating, specialization, thumbnail_image} = props;
  return (
    <View style={styles.container}>
      <FastImage
        source={thumbnail_image}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <View style={styles.innerContainerStyle}>
        <Poppins200 style={styles.nameStyle}>{name}</Poppins200>
        <Poppins200 style={styles.specialistAndDistanceStyle}>
          {specialization}
        </Poppins200>
        <Poppins200 style={styles.ratingStyle}>{`★ ${rating}`}</Poppins200>
        <Poppins200 style={styles.specialistAndDistanceStyle}>
          {`${distance} away`}
        </Poppins200>
      </View>
    </View>
  );
};

export default memo(TopDoctorItem);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    gap: 16,
    borderWidth: 0.2,
    borderColor: colors.grey_50,
    borderRadius: 12,
    alignItems:'center'
  },
  imageStyle: {
    width: AppDimensions.windowWidth / 3.2,
    height: AppDimensions.windowWidth / 3.2,
    borderRadius: 8,
  },
  innerContainerStyle: {
    gap: 6,
  },
  nameStyle: {
    fontSize: 18,
  },
  specialistAndDistanceStyle: {
    color: colors.grey_50,
    fontSize: 13,
  },
  ratingStyle: {
    color: colors.primary,
    fontSize: 13,
  },
});
