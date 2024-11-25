import {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage, {Source} from 'react-native-fast-image';
import {AppDimensions, colors} from '../../constants';
import {Poppins100, Poppins200} from '../common/Fonts';
import GlobalStyles from '../../constants/GlobalStyles';

export type trendingArticleProps = {
  id: number;
  title: string;
  description: string;
  date: string;
  readBefore: string;
  thumbnail_image: number | Source | undefined;
};

const TrendingArticleItem = (props: trendingArticleProps) => {
  const {id, title, description, date, readBefore, thumbnail_image} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <FastImage
          source={thumbnail_image}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </View>
      <Poppins200 style={styles.nameStyle}>{title}</Poppins200>
      <Poppins100 style={styles.specialistStyle}>{description}</Poppins100>

      <View
        style={[
          GlobalStyles.fdRow,
          GlobalStyles.justifyAround,
          styles.footerStyle,
        ]}>
        <Poppins100 style={styles.ratingStyle}>{`${date}`}</Poppins100>
        <Poppins100 style={styles.distanceStyle}>{readBefore}</Poppins100>
      </View>
    </View>
  );
};

export default memo(TrendingArticleItem);

const styles = StyleSheet.create({
  container: {
    width: AppDimensions.windowWidth / 2.4,
    borderRadius: 15,
    backgroundColor: colors.input,
    marginRight: 10,
    shadowColor: colors.primary,
    borderColor: colors.primary,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 2},
    borderWidth: 0.3,
    gap: 8,
  },
  imageContainer: {
    width: '85%',
    height: 80,
    borderRadius: 12,
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
    flex:1,
    alignItems:'flex-end',
    marginBottom: 8,
  },
  ratingStyle: {
    fontSize: 11,
    color: colors.grey_50,
  },
  distanceStyle: {
    fontSize: 11,
    color: colors.primary,
  },
});
