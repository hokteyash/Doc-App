import {StyleSheet, Text, View} from 'react-native';
import {ScreenProps} from '../navigation/navigation.types';
import {memo} from 'react';
import GlobalStyles from '../constants/GlobalStyles';
import { colors } from '../constants';

const Appointment = ({navigation}: ScreenProps<'Appointment'>) => {
  return <View style={[GlobalStyles.globalFlex1, styles.container]}>

  </View>
};

export default memo(Appointment);

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
    }
})
