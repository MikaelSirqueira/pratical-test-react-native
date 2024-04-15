import { ScrollView, View } from 'react-native';
import { Header } from '../components/Header';
import { BookList } from '../components/BookList';
import { styles } from './styles';

export function Section({ route }) {
  const { books } = route.params

  return (
    <View style={styles.container}>      
      <Header />
      <View styles={styles.content} >
        <BookList styles={styles.books} title={''} booksData={books} isHorizontal={false} />
      </View>

    </View>
  );
}
