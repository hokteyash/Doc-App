import {memo, useCallback, useLayoutEffect, useRef} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {ScreenProps} from '../navigation/navigation.types';
import GlobalStyles from '../constants/GlobalStyles';
import {AppDimensions, colors} from '../constants';
import CustomInput, {CustomInputRef} from '../components/common/CustomInput';
import {Poppins100, Poppins200} from '../components/common/Fonts';
import Button from '../components/common/Button';
import {articleData, articleType, data, FoodData} from '../utils';
import HealthItem, {healthProps} from '../components/app/HealthItem';
import TrendingArticleItem, {
  trendingArticleProps,
} from '../components/app/TrendingArticleItem';

const Articles = ({navigation}: ScreenProps<'Articles'>) => {
  const InputRef = useRef<CustomInputRef>(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      contentStyle: {
        paddingTop: 0,
      },
    });
  }, []);
  const renderArticleItem = useCallback(
    ({item, index}: {item: articleType; index: number}) => {
      return (
        <Button title={item.title} buttonStyle={styles.buttonContainerStyle} />
      );
    },
    [],
  );
  const renderTrendingArticle = useCallback(
    ({item, index}: {item: trendingArticleProps; index: number}) => {
      return <TrendingArticleItem {...item} />;
    },
    [],
  );
  const navigateToToArticleScreen = useCallback(() => {
    navigation.navigate('Articles');
  }, [navigation]);
  const renderHealthItem = useCallback((item: healthProps, index: number) => {
    return <HealthItem {...item} key={index} />;
  }, []);
  return (
    <ScrollView
      style={[GlobalStyles.globalFlex1, styles.container]}
      contentContainerStyle={GlobalStyles.globalFlexGrow}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.searchContainer}>
        <CustomInput
          ref={InputRef}
          placeholder="Search article, news ..."
          placeholderTextColor={colors.grey_50}
        />
      </View>
      <View style={styles.popularArticleContainerStyle}>
        <Poppins200 style={styles.titleStyle}>Popular Articles</Poppins200>
        <FlatList
          horizontal
          data={articleData}
          renderItem={renderArticleItem}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatlistContainer}
        />
      </View>
      <View style={styles.main}>
        <View
          style={[
            GlobalStyles.fdRow,
            GlobalStyles.justifyBetween,
            GlobalStyles.alignCenter,
          ]}>
          <Poppins200 style={styles.doctorLabelStyle}>
            Trending Articles
          </Poppins200>
          <Poppins100 style={styles.seeAllStyle}>See all</Poppins100>
        </View>
        <View style={styles.doctorContainer}>
          <FlatList
            horizontal
            data={articleData}
            renderItem={renderTrendingArticle}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View
          style={[
            GlobalStyles.fdRow,
            GlobalStyles.justifyBetween,
            GlobalStyles.alignCenter,
          ]}>
          <Poppins200 style={styles.doctorLabelStyle}>
            Health Article
          </Poppins200>
          <Poppins100
            style={styles.seeAllStyle}
            onPress={navigateToToArticleScreen}>
            See all
          </Poppins100>
        </View>
        <View style={styles.footerItemContainer}>
          {FoodData.map(renderHealthItem)}
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(Articles);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 18,
  },
  searchContainer: {
    marginBottom: 6,
  },
  titleStyle: {
    fontSize: 20,
  },
  popularArticleContainerStyle: {
    marginTop: 8,
  },
  buttonContainerStyle: {
    marginRight: 12,
    padding: 16,
    width: AppDimensions.windowWidth / 3,
    height: AppDimensions.windowWidth / 7,
    marginVertical:6,
  },
  flatlistContainer: {
    marginVertical: 8,
  },
  main: {
    marginVertical: 10,
    // padding: 4,
  },
  doctorLabelStyle: {
    fontSize: 20,
  },
  seeAllStyle: {
    fontSize: 16,
    color: colors.primary,
  },
  doctorContainer: {
    marginVertical: 12,
  },
  imageContainerStyle: {
    borderRadius: 12,
    width: '85%',
  },
  footerContainer: {
    paddingLeft: 8,
    paddingBottom: 16,
  },
  footerItemContainer: {
    gap: 8,
    marginVertical: 16,
  },
});
