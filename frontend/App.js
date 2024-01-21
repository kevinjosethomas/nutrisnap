import { StyleSheet} from 'react-native';
import { GlobalProvider } from './context/GlobalState';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './navigation/Tabs';


export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <GlobalProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </GlobalProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
