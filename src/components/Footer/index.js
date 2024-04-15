import { View, Image} from 'react-native';
import { styles } from './styles'

export function Footer() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/home.png')} />
      <Image source={require('../../assets/book.png')} />
      <Image source={require('../../assets/heart.png')} />
      <Image source={require('../../assets/mic.png')} />
    </View>
  )
}