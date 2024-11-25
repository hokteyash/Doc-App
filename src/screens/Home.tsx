import {FlatList, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {ScreenProps} from '../navigation/navigation.types';
import {memo, useCallback, useRef} from 'react';
import {colors} from '../constants';
import GlobalStyles from '../constants/GlobalStyles';
import {Poppins100, Poppins200} from '../components/common/Fonts';
import FastImage from 'react-native-fast-image';
import {icons, images} from '../assets';
import CustomInput, {CustomInputRef} from '../components/common/CustomInput';
import Amenities from '../components/app/Amenities';
import Button from '../components/common/Button';
import {data, FoodData} from '../utils';
import DoctorItem, {doctorProps} from '../components/app/DoctorItem';
import HealthItem, {healthProps} from '../components/app/HealthItem';

const Home = ({navigation}: ScreenProps<'Home'>) => {
  const InputRef = useRef<CustomInputRef>(null);
  const renderDoctorItem = useCallback(
    ({item, index}: {item: doctorProps; index: number}) => {
      return <DoctorItem {...item} />;
    },
    [],
  );
  const renderHealthItem = useCallback((item: healthProps, index: number) => {
    return <HealthItem {...item} key={index} />;
  }, []);

  const navigateToToDoctorScreen = useCallback(() => {
    navigation.navigate('TopDoctor');
  }, [navigation]);

  const navigateToToArticleScreen = useCallback(() => {
    navigation.navigate('Articles');
  }, [navigation]);

  return (
    <ScrollView
      contentContainerStyle={[GlobalStyles.globalFlexGrow]}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={[GlobalStyles.globalFlex1, styles.container]}>
        <View style={[GlobalStyles.fdRow, GlobalStyles.justifyBetween]}>
          <Poppins200 style={styles.headingStyle}>
            Find your Desire healt Solution
          </Poppins200>
          <FastImage
            source={icons.notification}
            resizeMode="contain"
            style={styles.notificationIconStyle}
          />
        </View>
        <View style={styles.searchContainer}>
          <CustomInput
            ref={InputRef}
            placeholder="Search doctor, drugs and articles ..."
            placeholderTextColor={colors.grey_50}
          />
        </View>
        <View
          style={[
            GlobalStyles.fdRow,
            GlobalStyles.flexWrap,
            styles.staticContainer,
          ]}>
          <Amenities icon={images.doctor} />
          <Amenities icon={images.medicine} />
          <Amenities
            icon={images.ambulance}
            imageStyle={styles.ambulanceStyle}
          />
          <Amenities icon={images.prescription} />
        </View>
        <View style={styles.middleContainer}>
          <Poppins200 style={styles.titleStyle}>
            Early protection for your family healt
          </Poppins200>
          <Button
            title="Learn More"
            buttonStyle={styles.learnMoreButtonStyle}
          />
        </View>
        <View style={styles.main}>
          <View
            style={[
              GlobalStyles.fdRow,
              GlobalStyles.justifyBetween,
              GlobalStyles.alignCenter,
            ]}>
            <Poppins200 style={styles.doctorLabelStyle}>Top Doctor</Poppins200>
            <Poppins100
              style={styles.seeAllStyle}
              onPress={navigateToToDoctorScreen}>
              See all
            </Poppins100>
          </View>
          <View style={styles.doctorContainer}>
            <FlatList
              horizontal
              data={data}
              renderItem={renderDoctorItem}
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
      </View>
    </ScrollView>
  );
};

export default memo(Home);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
  },
  notificationIconStyle: {
    width: 32,
    height: 32,
    marginTop: 8,
  },
  headingStyle: {
    fontSize: 25,
    width: '65%',
  },
  searchContainer: {
    marginVertical: 16,
  },
  staticContainer: {
    gap: 15,
    marginVertical: 16,
  },
  ambulanceStyle: {
    width: '70%',
    height: '70%',
  },
  middleContainer: {
    backgroundColor: colors.lightPrimary,
    borderRadius: 15,
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginVertical: 16,
    gap: 2,
  },
  titleStyle: {
    width: '65%',
    fontSize: 20,
  },
  learnMoreButtonStyle: {
    width: '40%',
    height: 40,
  },
  main: {
    marginVertical: 10,
    padding: 4,
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
  footerContainer: {
    paddingLeft: 8,
  },
  footerItemContainer: {
    gap: 8,
    marginVertical: 16,
  },
});
