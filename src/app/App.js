import { View } from 'react-native';
import { styles } from './styles'
import { Header } from '../components/Header'
import { Search } from '../components/Search'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />  
      <Search />
    </View>
  );
}
