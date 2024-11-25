import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenProps} from '../navigation/navigation.types';
import {memo, useLayoutEffect} from 'react';
import {colors} from '../constants';
import GlobalStyles from '../constants/GlobalStyles';
import {Poppins200} from '../components/common/Fonts';
import FastImage from 'react-native-fast-image';
import {icons} from '../assets';
import Header from '../components/common/Header';

const Messages = ({navigation}: ScreenProps<'Messages'>) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      contentStyle: {
        paddingTop: 0,
      },
    });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={GlobalStyles.globalFlexGrow}
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={[GlobalStyles.globalFlex1, styles.container]}>
        <Header title="Messages" icon={icons.search} />
      </View>
    </ScrollView>
  );
};

export default memo(Messages);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
  },
});
