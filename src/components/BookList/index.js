import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './styles';

export function BookList({ title, booksData }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleSection}>{title}</Text>

      <ScrollView
        contentContainerStyle={styles.contentBooks}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {booksData.map((item) => (
          <View style={styles.catalog} >
            <Image source={{ uri: item.book_image }} style={styles.img} />
            
            <Text style={styles.title}>
              {item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}
            </Text>
            
            <Text style={styles.author}>{item.author}</Text>

            <View style={styles.star}>
              {Array.from({ length: 5 }).map((_) => (
                <Image source={require('../../assets/Star.png')} />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
