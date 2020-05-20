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

  const addPlaylist = () => {
    setPlaylists((prev) => {
      return [...prev, { key: playlists.length.toString() }];
    })
  }

  const onChangeText = (value) => {
    setSearchValue(value);
    setFilteredPlaylists(playlists
      .filter(item => item.key.includes(value)))
  }

  return (
    <View style={GlobalStyles.screenContainer}>
      <View style={GlobalStyles.contentContainer}>
        <Searchbar
          style={GlobalStyles.searchbar}
          placeholder="חפש..."
          value={searchValue}
          onChangeText={onChangeText}
          inputStyle={{ fontSize: 26 }}
        />
        <HeeboText bold marginTop={30}>
          בלהבלה
      </HeeboText>
        <Divider />
        <FlatList
          data={filteredPlaylists}
          numColumns={3}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.card} elevation={0}
              onPress={() => navigation.navigate('Playlist', { name: item.key })}>
              <Image style={{ height: 60, width: 200 }} source={require('../../assets/images/switch.png')} />
              <HeeboText>
                {item.key} </HeeboText>
            </TouchableOpacity>
          } />
      </View>
      < FAB
        style={styles.fab}
        icon="plus"
      // onPress={addPlaylist}
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
    marginVertical: 60,
    marginHorizontal: 22,
    alignItems: 'center'
  },
})
