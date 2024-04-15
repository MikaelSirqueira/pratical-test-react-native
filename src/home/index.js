import { View, ScrollView } from 'react-native';
import { styles } from './styles';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { BookList } from '../components/BookList';
import { CategoryList } from '../components/CategoryList';
import { Footer } from '../components/Footer';
import api  from '../api/api';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const URL_CATEGORIES = '/svc/books/v3/lists/names.json';
const URL_BOOKS = '/svc/books/v3/lists/overview.json';
const API_KEY = 'vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR';

export function Home() {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [popularBooks, setPopularBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [listBooks, setListBooks] = useState([]);

  const navigation = useNavigation();

  const getCategories = async () => {
    try {
      const responseCategories = await api.get(URL_CATEGORIES, {
        params: { 'api-key': API_KEY }
      });
      setCategories(responseCategories.data.results);
    } catch (e) {
      console.error('Erro ao recuperar as categorias:', e);
    }
  };

  const getBooks = async () => {
    try {      
      const response = await api.get(URL_BOOKS, {
        params: { 'api-key': API_KEY }
      });
      setListBooks(response.data.results.lists);

      setRecommendedBooks(response.data.results.lists[0].books);
      setPopularBooks(response.data.results.lists[1].books);
    } catch (e) {
      console.error('Erro ao recuperar os livros:', e);
    }
  };
  
  useEffect(() => {      
    getBooks();
    getCategories();
  }, []);  

  const goToSection = (categoryData) => {
    const booksByCategory = listBooks.
      filter(x => x.list_name_encoded === categoryData.list_name_encoded)[0].books;    

    navigation.navigate('Section', {books: booksByCategory});
  };
  
  return (
    <View style={styles.container}>
      <Header showImage={true} />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Search />      
        <BookList title={'Para você'} booksData={recommendedBooks} />
        <CategoryList categoriesData={categories} onCategoryClick={goToSection}/>
        <BookList title={'Os mais lidos da semana'} booksData={popularBooks} /> 
      </ScrollView>
      <Footer />
    </View>
  );
}
