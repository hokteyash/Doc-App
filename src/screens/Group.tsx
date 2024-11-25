import {memo} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../constants';
import {groupMessage} from '../utils';
import MessageItem from '../components/app/MessageItem';
import FastImage from 'react-native-fast-image';
import { icons } from '../assets';

const Group = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {groupMessage.map((obj, index) => (
        <MessageItem {...obj} key={obj.id} />
      ))}
      <FastImage source={icons.chat} style={styles.iconStyle} />
    </ScrollView>
  );
};

export default memo(Group);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 16,
    position:'relative'
  },
  iconStyle: {
    position: 'absolute',
    bottom: 32,
    right:16,
    width: 46,
    height: 46,
  },
});
