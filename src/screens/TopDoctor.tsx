import {memo, useCallback, useLayoutEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';
import FastImage from 'react-native-fast-image';
import {Poppins200} from '../components/common/Fonts';
import {icons} from '../assets';
import {data} from '../utils';
import {ScreenProps} from '../navigation/navigation.types';
import {doctorProps} from '../components/app/DoctorItem';
import TopDoctorItem from '../components/app/TopDoctorItem';
import {colors} from '../constants';

const TopDoctor = ({navigation}: ScreenProps<'TopDoctor'>) => {
  const renderHealthItem = useCallback((item: doctorProps, index: number) => {
    return <TopDoctorItem {...item} key={index} />;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      contentStyle: {
        paddingTop: 0,
      },
    });
  },[]);

  return (
    <ScrollView
      contentContainerStyle={GlobalStyles.globalFlexGrow}
      bounces={false}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>{data.map(renderHealthItem)}</View>
    </ScrollView>
  );
};

export default memo(TopDoctor);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 18,
  },
  iconStyle: {
    width: 28,
    height: 28,
  },
  headerTitleStyle: {
    fontSize: 20,
  },
  mainContainer: {
    marginVertical: 24,
    gap: 12,
    padding: 4,
  },
  headerContainer: {
    paddingBottom: 4,
  },
  imageContainer: {
    paddingHorizontal: 4,
  },
});
