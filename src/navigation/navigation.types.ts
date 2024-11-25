import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppScreens} from '../constants';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';

export type AuthStackParamList = {
  [AppScreens.Login]: undefined;
  [AppScreens.Signup]: undefined;
  [AppScreens.MainTab]: undefined;
  [AppScreens.TopDoctor]: undefined;
  [AppScreens.Articles]: undefined;
};

export type MainTabParamList = {
  [AppScreens.Home]: undefined;
  [AppScreens.Messages]: undefined;
  [AppScreens.Appointment]: undefined;
  [AppScreens.Profile]: undefined;
  [AppScreens.MessageTopTab]: undefined;
  [AppScreens.AppointmentTopTab]: undefined;
};

export type TopTabParamList = {
  [AppScreens.All]: undefined;
  [AppScreens.Group]: undefined;
  [AppScreens.Private]: undefined;
  [AppScreens.Upcoming]: undefined;
  [AppScreens.Completed]: undefined;
  [AppScreens.Cancelled]: undefined;
};

export type RootNavigation = NativeStackNavigationProp<AuthStackParamList> &
  BottomTabNavigationProp<MainTabParamList> &
  MaterialTopTabNavigationProp<TopTabParamList>;

export type CombinedParamList = AuthStackParamList &
  MainTabParamList &
  TopTabParamList;

export type ScreenProps<
  S extends keyof CombinedParamList = keyof CombinedParamList,
> = {
  navigation: RootNavigation;
  route: RouteProp<CombinedParamList, S>;
};

export type useNavigationType = NavigationProp<CombinedParamList>;
