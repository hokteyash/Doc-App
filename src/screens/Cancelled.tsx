import {memo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '../constants';
import {AppointmentData, appointmentType} from '../utils';
import AppointmentItem from '../components/app/AppointmentItem';

const Cancelled = () => {
  const CancelledData = AppointmentData.filter(
    (item: appointmentType) => item.appointment_status === 'Cancelled',
  );
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      {CancelledData.map((obj, index) => (
        <AppointmentItem {...obj} key={obj.id} />
      ))}
    </ScrollView>
  );
};

export default memo(Cancelled);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 16,
    gap: 24,
  },
});
