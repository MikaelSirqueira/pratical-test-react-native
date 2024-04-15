import { View } from 'react-native';
import { styles } from './styles';
import { Home } from './home';

export default function App() {  
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
