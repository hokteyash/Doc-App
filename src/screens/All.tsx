import {memo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {AppDimensions, colors} from '../constants';
import {ScreenProps} from '../navigation/navigation.types';
import {message} from '../utils';
import MessageItem from '../components/app/MessageItem';
import FastImage from 'react-native-fast-image';
import {icons} from '../assets';

const All = ({navigation, route}: ScreenProps<'All'>) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {message.map((obj, index) => (
        <MessageItem {...obj} key={obj.id} />
      ))}
      <FastImage source={icons.chat} style={styles.iconStyle} />
    </ScrollView>
  );
};

export default memo(All);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 16,
    position: 'relative',
  },
  iconStyle: {
    position: 'absolute',
    bottom: 32,
    right:16,
    width: 46,
    height: 46,
  },
});
