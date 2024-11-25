import {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {appointmentType} from '../../utils';
import {colors} from '../../constants';
import FastImage from 'react-native-fast-image';
import {Poppins200, Poppins300} from '../common/Fonts';
import {icons} from '../../assets';
import Button from '../common/Button';
import GlobalStyles from '../../constants/GlobalStyles';
import DateTimeStatusItem from '../common/DateTimeStatusItem';

const AppointmentItem = (props: appointmentType) => {
  const {
    name,
    date,
    time,
    appointment_status,
    profile_picture,
    id,
    specialization,
  } = props;
  return (
    <View style={styles.container}>
      <View
        style={[
          GlobalStyles.fdRow,
          GlobalStyles.justifyBetween,
          GlobalStyles.alignCenter,
        ]}>
        {/* Name and specialization part */}
        <View>
          <Poppins300 style={styles.nameStyle}>{name}</Poppins300>
          <Poppins200 style={styles.specializationStyle}>
            {specialization}
          </Poppins200>
        </View>
        {/* Image part */}
        <FastImage
          source={profile_picture}
          style={styles.profileImageStyle}
          resizeMode="cover"
        />
      </View>
      {/* Date, time and appointment status */}
      <View
        style={[
          GlobalStyles.fdRow,
          GlobalStyles.justifyBetween,
          GlobalStyles.alignCenter,
        ]}>
        <DateTimeStatusItem
          icon={icons.appointment}
          name={date}
          notAnIcon={false}
        />
        <DateTimeStatusItem icon={icons.time} name={time} notAnIcon={false} />
        <DateTimeStatusItem name={appointment_status} notAnIcon={true} />
      </View>
      {appointment_status === 'Confirmed' && (
        <View
          style={[
            GlobalStyles.fdRow,
            GlobalStyles.alignCenter,
            GlobalStyles.justifyBetween,
          ]}>
          <Button title="Cancel" buttonStyle={styles.btnStyle} />
          <Button
            title="Reschedule"
            buttonStyle={styles.reBtnStyle}
            textStyle={styles.reBtnTextStyle}
          />
        </View>
      )}
    </View>
  );
};

export default memo(AppointmentItem);

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: colors.white,
    elevation: 4,
    borderRadius: 6,
    gap: 8,
  },
  btnStyle: {
    backgroundColor: colors.grey_50,
    borderColor: colors.grey_50,
    minWidth:'45%',
  },
  reBtnStyle: {
    backgroundColor: colors.primary,
    minWidth:'45%',
  },
  reBtnTextStyle: {
    color: colors.white,
  },
  nameStyle: {
    fontSize: 16,
  },
  specializationStyle: {
    color: colors.grey_50,
  },
  profileImageStyle: {
    width:50,
    height: 50,
    borderRadius: 25,
},
});
