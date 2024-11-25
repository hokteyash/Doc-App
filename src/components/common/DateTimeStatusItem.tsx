import {memo, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import GlobalStyles from '../../constants/GlobalStyles';
import {Poppins200} from './Fonts';
import {colors} from '../../constants';

type item = {
  icon?: FastImageProps['source'] | number | undefined;
  name: string;
  notAnIcon: boolean;
};

const DateTimeStatusItem = (props: item) => {
  const {icon, name, notAnIcon} = props;
  return (
    <View style={[GlobalStyles.fdRow, GlobalStyles.alignCenter, {gap: 6}]}>
      {notAnIcon ? (
        <View
          style={
            name === 'Confirmed' || name === 'Completed'
              ? styles.status
              : [styles.status, {backgroundColor: colors.red}]
          }></View>
      ) : (
        <FastImage
          source={icon}
          style={styles.iconStyle}
          resizeMode="contain"
        />
      )}
      <Poppins200 style={{marginTop: 3}}>{name}</Poppins200>
    </View>
  );
};

export default memo(DateTimeStatusItem);

const styles = StyleSheet.create({
  iconStyle: {
    width: 16,
    height: 16,
  },
  status: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});
