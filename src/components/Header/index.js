import { Text, View, Image } from 'react-native';
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>   
        <Text style={styles.title}>Bookshlef</Text>        
        <View>
          <Image style={styles.img} source={require("../../assets/perfil.png")}></Image>
        </View>
    </View>
  );
}