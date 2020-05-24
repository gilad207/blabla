import React, { useState, useEffect } from 'react';
import HeeboText from '../../components/HeeboText';
import { DATA } from '../../assets/Data'
import { Searchbar, Snackbar, Card, IconButton, FAB, Button, Divider, Portal, Provider } from 'react-native-paper'
import { FlatList, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { GlobalStyles } from '../../GlobalStyles'
import Modal from 'react-native-modal';

export default function Playlist({ navigation, route }) {
    const [searchValue, setSearchValue] = useState('');
    const [songs, setSongs] = useState(DATA)
    const [filteredSongs, setFilteredSongs] = useState(DATA)
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [isSearchbarVisible, setSearchbarVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        setFilteredSongs(songs
            .filter(item => item.key.includes(searchValue)))
    }, [songs]);

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
                        size={35}
                        onPress={() => navigation.navigate('Home')}
                    />
                    <HeeboText bold size={30} marginTop={10}>{route.params.name}</HeeboText>
                </View>
                <IconButton
                    icon='magnify'
                    size={40}
                    onPress={() => setSearchbarVisible(true)}
                />
            </View>}

            {isSearchbarVisible && <Searchbar
                icon='chevron-right'
                onIconPress={() => setSearchbarVisible(false)}
                style={GlobalStyles.searchbar}
                placeholder="חפש..."
                value={searchValue}
                onChangeText={onChangeText}
                inputStyle={{ fontSize: 25, fontFamily: 'Heebo' }}
                iconColor='black'
            />}

            < FlatList
                data={filteredSongs}
                renderItem={({ item }) =>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, flex: 1 }}>
                        <TouchableOpacity style={styles.card}
                            onPress={() => navigation.navigate('Song', { name: item.key })}>
                            <Image style={{ height: 30, width: 100, marginTop: 20 }} source={require('../../assets/images/switch.png')} />
                            <Card.Title title={item.key} titleStyle={{ fontSize: 22 }} subtitle={item.key} subtitleStyle={{ fontSize: 16 }} />
                        </TouchableOpacity>
                        <IconButton
                            style={{ marginRight: 40 }}
                            icon='dots-horizontal'
                            size={40}
                            onPress={() => setModalVisible(true)}
                        />

                    </View>
                } />
            <View style={{}} >
                <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', height: 400, marginBottom: -40, borderTopStartRadius: 15, borderTopEndRadius: 15, padding: 30, width: 800 }}>
                        <HeeboText>בלה</HeeboText>
                    </View>
                </Modal>
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
    menuOption: {
        marginTop: 20,
    },
    fab: {
        position: 'absolute',
        margin: 80,
        right: 0,
        bottom: 0,
    },
    card: {
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row'
    },
})
