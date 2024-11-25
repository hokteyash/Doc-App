import {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {colors} from '../../constants';
import {Poppins100, Poppins200} from '../common/Fonts';

export type healthProps = {
  id: number;
  title: string;
  thumbnail_image: number | Source | undefined;
  date: string;
  whenRead: string;
};

const HealthItem = (props: healthProps) => {
  const {title, thumbnail_image, date, whenRead} = props;
  return (
    <View style={styles.container}>
      <FastImage
        source={thumbnail_image}
        resizeMode="cover"
        style={styles.imageStyle}
      />
      <View style={styles.footerContainer}>
        <Poppins200 style={styles.titleStyle}>{title}</Poppins200>
        <Poppins100
          style={styles.paraStyle}>{`${date}  • ${whenRead}`}</Poppins100>
      </View>
    </View>
  );
};

export default memo(HealthItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 8,
    gap: 16,
    marginVertical:8,
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  titleStyle: {
    fontSize: 14,
    width: '60%',
  },
  paraStyle: {
    fontSize: 12,
    color: colors.grey_50,
  },
  footerContainer: {
    gap: 8,
  },
});
