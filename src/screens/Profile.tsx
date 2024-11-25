import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ScreenProps} from '../navigation/navigation.types';
import {memo} from 'react';
import {AppDimensions, colors} from '../constants';
import GlobalStyles from '../constants/GlobalStyles';
import FastImage from 'react-native-fast-image';
import {icons, images} from '../assets';
import {Poppins200, Poppins300} from '../components/common/Fonts';
import ProfileHealthItem from '../components/app/ProfileHealthItem';
import InformationItem from '../components/common/InformationItem';

const Profile = ({navigation}: ScreenProps<'Profile'>) => {
  return (
    <View style={[GlobalStyles.globalFlex1, styles.container]}>
      <View style={styles.imageOuterContainer}>
        <View style={styles.imageContainer}>
          <FastImage
            source={images.profilePic}
            resizeMode="cover"
            style={styles.imageStyle}
          />
        </View>
        <View style={styles.lowerChangeImageContainerIconStyle}>
          <FastImage
            source={icons.camera}
            style={styles.lowerChangeImageIconStyle}
            resizeMode="contain"
          />
        </View>
      </View>
      <Poppins300 style={[styles.nameStyle, {alignSelf: 'center'}]}>
        Yash Hokte
      </Poppins300>
      <View style={[GlobalStyles.fdRow, {alignSelf: 'center'}]}>
        <ProfileHealthItem
          icon={icons.heart}
          title="Heart Rate"
          value="215 bpm"
          isNotBorder={false}
        />
        <ProfileHealthItem
          icon={icons.calories}
          title="Calories"
          value="756 cal"
          isNotBorder={false}
        />
        <ProfileHealthItem
          icon={icons.weight}
          title="Weight"
          value="103 kg"
          isNotBorder={true}
        />
      </View>
      <ScrollView
        contentContainerStyle={styles.footerStyle}
        showsVerticalScrollIndicator={false}>
        <InformationItem icon={icons.saved} title="My Saved" />
        <InformationItem icon={icons.app} title="Appointment" />
        <InformationItem icon={icons.paymentMethod} title="Payment Method" />
        <InformationItem icon={icons.faq} title="FAQs" />
        <InformationItem icon={icons.help} title="Help" />
      </ScrollView>
    </View>
  );
};

export default memo(Profile);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    gap: 18,
  },
  imageContainer: {
    width: AppDimensions.windowWidth / 3.5,
    height: AppDimensions.windowWidth / 3.5,
    borderRadius: AppDimensions.windowWidth / 3.5 / 2,
    overflow: 'hidden',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  imageOuterContainer: {
    position: 'relative',
    alignSelf: 'center',
    marginTop: 8,
  },
  lowerChangeImageContainerIconStyle: {
    position: 'absolute',
    width: 26,
    height: 26,
    borderRadius: 13,
    padding: 6,
    backgroundColor: colors.white,
    bottom: 9,
    right: -4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerChangeImageIconStyle: {
    width: '120%',
    height: '120%',
  },
  nameStyle: {
    fontSize: 24,
    color: colors.white,
  },
  footerStyle: {
    flexGrow: 1,
    backgroundColor: colors.white,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
  },
});
