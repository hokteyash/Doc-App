import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {memo} from 'react';
import {TopTabParamList} from './navigation.types';
import {colors} from '../constants';
import {fonts} from '../assets';
import Upcoming from '../screens/Upcoming';
import Completed from '../screens/Completed';
import Cancelled from '../screens/Cancelled';

const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

const MessageTopTab = () => {
  return (
    <TopTab.Navigator
      screenOptions={({route}) => ({
        tabBarItemStyle: {
          borderRadius: 12,
          padding: 0,
          marginHorizontal: 16,
        },
        tabBarIndicatorStyle: {
          width: '35%',
          height: '100%',
          borderRadius: 10,
          backgroundColor: colors.primary,
        },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
          margin: 16,
          borderRadius: 10,
          backgroundColor: colors.lightestPrimary,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.poppinsMedium,
          fontSize: 12,
        },
      })}>
      <TopTab.Screen name="Upcoming" component={Upcoming} />
      <TopTab.Screen name="Completed" component={Completed} />
      <TopTab.Screen name="Cancelled" component={Cancelled} />
    </TopTab.Navigator>
  );
};

export default memo(MessageTopTab);
