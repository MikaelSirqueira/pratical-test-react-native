import { Text, View, TextInput} from 'react-native';
import { styles } from './styles'
import { FontAwesome } from '@expo/vector-icons';

export function Search() {
  return (
    <View style={styles.container}>   
        <TextInput 
          style={styles.input}
          placeholder='Qual livro você gostaria de ler hoje?'
          placeholderTextColor='#A7ABB0'
        />
        <FontAwesome 
          name="search" 
          size={20} 
          style={styles.icon}
        />
    </View>
  );
}