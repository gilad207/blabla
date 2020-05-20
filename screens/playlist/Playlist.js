import React, { useState, useEffect } from 'react';
import HeeboText from '../../components/HeeboText';
import { DATA } from '../../assets/Data'
import { Searchbar, Snackbar, Card, IconButton, FAB, Button } from 'react-native-paper'
import { FlatList, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { GlobalStyles } from '../../GlobalStyles'

export default function Playlist({ navigation, route }) {
    const [searchValue, setSearchValue] = useState('');
    const [songs, setSongs] = useState(DATA)
    const [filteredSongs, setFilteredSongs] = useState(DATA)
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [isSearchbarVisible, setSearchbarVisible] = useState(false);

    useEffect(() => {
        setFilteredSongs(songs
            .filter(item => item.key.includes(searchValue)))
    }, [songs]);

    const addPlaylist = () => {
        setSongs((prev) => {
            return [...prev, { key: songs.length.toString() }];
        })
    }

    const onChangeText = (value) => {
        setSearchValue(value);
        setFilteredSongs(songs
            .filter(item => item.key.includes(value)))
    }

    return (
        <View style={GlobalStyles.screenContainer}>
            {!isSearchbarVisible && <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginVertical: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                    <IconButton
                        icon='chevron-right'
                        size={40}
                        onPress={() => navigation.navigate('Home')}
                    />
                    <HeeboText bold marginTop={15}>{route.params.name}</HeeboText>
                </View>
                <IconButton
                    icon='magnify'
                    size={40}
                    onPress={() => setSearchbarVisible(true)}
                />
            </View>}
            <View style={GlobalStyles.contentContainer}>
                {isSearchbarVisible && <Searchbar
                    icon='chevron-right'
                    onIconPress={() => setSearchbarVisible(false)}
                    style={GlobalStyles.searchbar}
                    placeholder="חפש..."
                    value={searchValue}
                    onChangeText={onChangeText}
                    inputStyle={{ fontSize: 30, fontFamily: 'Heebo-Bold' }}
                />}
                <FlatList
                    data={filteredSongs}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ height: 50, width: 150, marginLeft: 20, }} source={require('../../assets/images/switch.png')} />
                            <TouchableOpacity style={styles.card}
                                onPress={() => navigation.navigate('Song', { name: item.key })}>
                                <Card.Title title={item.key} titleStyle={{ fontSize: 26 }} subtitle={item.key} subtitleStyle={{ fontSize: 20 }} />
                            </TouchableOpacity>
                            <IconButton
                                icon='dots-horizontal'
                                size={40}
                                onPress={() => setSnackbarVisible(true)}
                            />
                        </View>
                    } />
            </View>
            <FAB
                style={styles.fab}
                icon="plus"
            />
            <Snackbar
                visible={isSnackbarVisible}
                onDismiss={() => { setSnackbarVisible(false) }}
                duration={1000}>
                <HeeboText size={20}>
                    הקובץ הורד
            </HeeboText>
            </Snackbar>
        </View >
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 80,
        right: 0,
        bottom: 0,
    },
    card: {
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 10,
        width: '65%',
        height: 90,
    },
})
