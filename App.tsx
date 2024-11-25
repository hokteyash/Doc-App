import {memo} from 'react';
import Root from './src/navigation/Root';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GlobalStyles from './src/constants/GlobalStyles';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider style={GlobalStyles.globalFlex1}>
      <StatusBar translucent={true} barStyle={'dark-content'} />
      <Root />
    </SafeAreaProvider>
  );
};

export default memo(App);
