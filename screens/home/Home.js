import React, { useState, useEffect } from 'react';
import HeeboText from '../../components/HeeboText';
import { DATA } from '../../assets/Data'
import { Searchbar, List, Button, Card, Text, Title, Paragraph, Divider, FAB } from 'react-native-paper'
import { FlatList, TouchableOpacity, Image, View, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../GlobalStyles'

export default function Home({ navigation }) {
  const [searchValue, setSearchValue] = useState('');
  const [playlists, setPlaylists] = useState(DATA)
  const [filteredPlaylists, setFilteredPlaylists] = useState(DATA)

  useEffect(() => {
    setFilteredPlaylists(playlists
      .filter(item => item.key.includes(searchValue)))
  }, [playlists]);

  const onChangeText = (value) => {
    setSearchValue(value);
    setFilteredPlaylists(playlists
      .filter(item => item.key.includes(value)))
  }

  return (
    <View style={GlobalStyles.screenContainer}>
      <Searchbar
        style={GlobalStyles.searchbar}
        placeholder="חפש..."
        value={searchValue}
        onChangeText={onChangeText}
        inputStyle={{ fontSize: 26 }}
      />
      <View style={{ marginTop: 30, marginLeft: 50, }}>
        <HeeboText bold size={28}>בלהבלה</HeeboText>
      </View>
      <Divider />
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={filteredPlaylists}
          numColumns={4}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.card} elevation={0}
              onPress={() => navigation.navigate('Playlist', { name: item.key })}>
              <Image style={{ height: 40, width: 150 }} source={require('../../assets/images/switch.png')} />
              <HeeboText>
                {item.key} </HeeboText>
            </TouchableOpacity>
          } />
      </View>
      < FAB
        style={styles.fab}
        icon="plus"
      />
    </View >
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 75,
    right: 0,
    bottom: 0,
  },
  card: {
    marginVertical: 40,
    marginHorizontal: 20,
    alignItems: 'center'
  },
})
