import { View } from 'react-native';
import { styles } from './styles';
import { Home } from './home';
import { Section } from './section';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from './components/Header';

const Stack = createStackNavigator();

export default function App() {  
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Section' component={Section} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}