import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './AuthNav';
import {memo} from 'react';

const Root = () => {
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
};

export default memo(Root);
