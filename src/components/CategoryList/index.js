import { Text, View, ScrollView} from 'react-native';
import { styles } from './styles'


export function CategoryList({categoriesData}) {
  const colors = { 
    orange: '#F2994A', green: '#219653', purple: '#9B51E0',
    red: '#d1372c', gray: '#4F4F4F', blue: '#56CCF2',
    green2: '#2fde3d', pink: '#d22fde', yellow: '#e6d525',
  }

  const getColor = (index) => {
    const colorKeys = Object.keys(colors);
    return colors[colorKeys[index % colorKeys.length]];
  };

  return (
    <View style={styles.container}>   
      <Text style={styles.titleSection}>Categorias</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.container}>
        {
          categoriesData.slice(0, 20).map((item, index) => (
            <View key={index} style={styles.section}>
              <View 
                style={{ ...styles.square, backgroundColor: getColor(index)}} 
              />
              <Text key={`index_${index}`}>
                {item.list_name.length > 9 ? item.list_name.slice(0, 9) + '...' : item.list_name} 
              </Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}