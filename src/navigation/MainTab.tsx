import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {memo} from 'react';
import {MainTabParamList} from './navigation.types';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {colors} from '../constants';
import FastImage, {Source} from 'react-native-fast-image';
import {StyleSheet} from 'react-native';
import {fonts, icons} from '../assets';
import MessageTopTab from './MessageTopTab';
import AppointmentTopTab from './AppointmentTopTab';

const BottomTab = createBottomTabNavigator<MainTabParamList>();

const TabIcon = ({
  icon,
  isFocused,
}: {
  icon: number | Source | undefined;
  isFocused: boolean;
}) => {
  return (
    <FastImage
      source={icon}
      resizeMode="contain"
      style={styles.iconStyle}
      tintColor={isFocused ? colors.primary : ''}
    />
  );
};

const MainTab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontFamily: fonts.poppinsSemiBold,
          fontSize: 11,
        },
        tabBarStyle: {
          height: 75,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.home} isFocused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MessageTopTab"
        component={MessageTopTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.message} isFocused={focused} />
          ),
          headerShown: true,
          headerShadowVisible: false,
          headerTitle: 'Message',
          headerTitleStyle: {
            fontFamily: fonts.poppinsSemiBold,
            fontSize:24,
            marginLeft:2,
          },
          headerRight: () => (
            <FastImage
              source={icons.search}
              style={styles.searchIcon}
              tintColor={colors.black}
            />
          ),
          tabBarLabel: 'Message',
        }}
      />
      <BottomTab.Screen
        name="Appointment"
        component={AppointmentTopTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.appointment} isFocused={focused} />
          ),
          headerShown: true,
          headerShadowVisible: false,
          headerTitle:'Schedule',
          headerTitleStyle: {
            fontFamily: fonts.poppinsSemiBold,
            fontSize:24,
            marginLeft:2,
          },
          headerRight: () => (
            <FastImage
              source={icons.notification}
              style={styles.notificationIcon}
            />
          ),
          tabBarLabel: 'Appointment',
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.profileBottom} isFocused={focused} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default memo(MainTab);

const styles = StyleSheet.create({
  iconStyle: {
    width: 25,
    height: 25,
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginRight:20,
  },
  notificationIcon:{
    width: 24,
    height: 24,
    marginRight:20,
  }
});
