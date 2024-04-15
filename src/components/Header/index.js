import { Text, View, Image, Pressable } from 'react-native';
import { styles } from './styles'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Header({showImage=false}) {
  const navigation = useNavigation();

  const backToHome = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>   
        {
          !showImage &&
          <Pressable onPress={backToHome}>
            <FontAwesome 
              name="arrow-left" 
              size={28}             
            />
          </Pressable>
        }
        <Text style={styles.title}>Bookshlef</Text>
        {
          showImage &&
          <Image style={styles.img} source={require("../../assets/perfil.png")}></Image>
        }
        
    </View>
  );
}