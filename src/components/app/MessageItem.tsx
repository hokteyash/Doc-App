import {memo} from 'react';
import {messageType} from '../../utils';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Poppins100, Poppins200} from '../common/Fonts';
import {AppDimensions, colors} from '../../constants';
import GlobalStyles from '../../constants/GlobalStyles';

const MessageItem = (props: messageType) => {
  const {
    profile_picture,
    didRead,
    message,
    name,
    notSeenMessage,
    time,
    contact,
  } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[GlobalStyles.fdRow, {gap: 12}]}>
        <FastImage
          source={profile_picture}
          style={styles.imageStyle}
          resizeMode="cover"
        />
        <View style={styles.nameMessageContainer}>
          <Poppins200 style={styles.nameStyle}>{name}</Poppins200>
          <View
            style={[
              GlobalStyles.fdRow,
              {width: AppDimensions.windowWidth / 2.6},
            ]}>
            {contact && (
              <Poppins100
                style={styles.messageStyle}>{`${contact}: `}</Poppins100>
            )}
            <Poppins100 style={styles.messageStyle} numberOfLines={1}>
              {message}
            </Poppins100>
          </View>
        </View>
      </View>
      <View style={styles.notSeenContainer}>
        <Poppins200 style={styles.timeStyle}>{time}</Poppins200>
        <View style={styles.notSeenMessageContainer}>
          <Poppins200 style={styles.notSeenMessageStyle}>
            {notSeenMessage}
          </Poppins200>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(MessageItem);

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    justifyContent: 'space-between',
  },
  imageStyle: {
    width: AppDimensions.windowWidth / 6,
    height: AppDimensions.windowWidth / 6,
    borderRadius: AppDimensions.windowWidth / 6 / 2,
  },
  nameStyle: {
    fontSize: 17,
  },
  nameMessageContainer: {
    marginTop: 4,
  },
  messageStyle: {
    color: colors.grey_50,
    fontSize: 13,
  },
  timeStyle: {
    fontSize: 13,
    color: colors.primary,
  },
  notSeenMessageContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notSeenMessageStyle: {
    fontSize: 11,
  },
  notSeenContainer: {alignItems: 'center', gap: 4, marginTop: 4},
});
