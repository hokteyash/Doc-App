import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {memo} from 'react';
import {TopTabParamList} from './navigation.types';
import All from '../screens/All';
import Group from '../screens/Group';
import Private from '../screens/Private';
import {colors} from '../constants';
import { fonts } from '../assets';

const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

const MessageTopTab = () => {
  return (
    <TopTab.Navigator
      screenOptions={({route}) => ({
        tabBarItemStyle: {
          borderRadius: 12,
          padding: 12,
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
        tabBarLabelStyle:{
          fontFamily:fonts.poppinsMedium,
          fontSize:14,
        }
      })}>
      <TopTab.Screen name="All" component={All} />
      <TopTab.Screen name="Group" component={Group} />
      <TopTab.Screen name="Private" component={Private} />
    </TopTab.Navigator>
  );
};

export default memo(MessageTopTab);
