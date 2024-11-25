import {memo} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants';
import {AppointmentData, appointmentType} from '../utils';
import AppointmentItem from '../components/app/AppointmentItem';

const Completed = () => {
  const CompletedData = AppointmentData.filter(
    (item: appointmentType) => item.appointment_status === 'Completed',
  );
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      {CompletedData.map((obj, index) => (
        <AppointmentItem {...obj} key={obj.id} />
      ))}
    </ScrollView>
  );
};

export default memo(Completed);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 16,
    gap: 24,
  },
});
