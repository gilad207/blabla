import React, { useState, useEffect } from 'react';
import HeeboText from '../../components/HeeboText';
import { DATA } from '../../assets/Data'
import { Searchbar, Snackbar, Card, IconButton, FAB, Button, Divider, Portal, Provider } from 'react-native-paper'
import { FlatList, View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import { GlobalStyles } from '../../GlobalStyles'
import Modal from 'react-native-modal';
import RNFetchBlob from 'rn-fetch-blob'

export default function Playlist({ navigation, route }) {
    const [searchValue, setSearchValue] = useState('');
    const [songs, setSongs] = useState(DATA)
    const [filteredSongs, setFilteredSongs] = useState(DATA)
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [isSearchbarVisible, setSearchbarVisible] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('')

    useEffect(() => {
        setFilteredSongs(songs
            .filter(item => item.key.includes(searchValue)))
    }, [songs]);

    const onChangeText = (value) => {
        setSearchValue(value);
        setFilteredSongs(songs
            .filter(item => item.key.includes(value)))
    }

    const openModal = (value) => {
        setModalTitle(value);
        setModalVisible(true);
    }

    const handleDownload = () => {
        downloadFile("https://www.w3schools.com/howto/img_forest.jpg", 'blabla')
        setSnackbarVisible(true);
        setModalVisible(false);
    }

    const downloadFile = (url, fileName) => {
        // const { config, fs } = RNFetchBlob;
        // const downloads = fs.dirs.DownloadDir;
        // return config({
        //     fileCache: true,
        //     addAndroidDownloads: {
        //         useDownloadManager: true,
        //         notification: false,
        //         path: downloads + '/' + fileName + '.jpg',
        //     }
        // })
        //     .fetch('GET', url);
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
                            <Image style={styles.image} source={require('../../assets/images/switch.png')} />
                            <Card.Title title={item.key} titleStyle={{ fontSize: 22 }} subtitle={item.key} subtitleStyle={{ fontSize: 16 }} />
                        </TouchableOpacity>
                        <IconButton
                            style={{ marginRight: 40 }}
                            icon='dots-horizontal'
                            size={40}
                            onPress={() => openModal(item.key)}
                        />

                    </View>
                } />
            <View style={{}} >
                <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', height: 490, marginBottom: -40, borderTopStartRadius: 15, borderTopEndRadius: 15, padding: 30, width: 800 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                            <Image style={{ height: 30, width: 80 }} source={require('../../assets/images/switch.png')} />
                            <Text style={{ fontSize: 22, marginTop: 0, marginLeft: 10 }}>{modalTitle}</Text>
                        </View>
                        <Divider style={styles.divider} />
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={handleDownload}>
                            <IconButton icon='cloud-download' size={40} />
                            <Text style={styles.optionText}>בלה1</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <IconButton icon='cloud-upload' size={40} />
                            <Text style={styles.optionText}>בלה2</Text>
                        </View>
                        <Divider style={styles.divider} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <IconButton icon='lead-pencil' size={40} />
                            <Text style={styles.optionText}>בלה3</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <IconButton icon='share' size={40} />
                            <Text style={styles.optionText}>בלה4</Text>
                        </View>
                        <Divider style={styles.divider} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <IconButton icon='history' size={40} />
                            <Text style={styles.optionText}>בלה5</Text>
                        </View>
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
    optionText: {
        fontFamily: 'Heebo',
        fontSize: 22,
        marginLeft: 25,
    },
    image: {
        height: 30,
        width: 100,
        marginTop: 20
    },
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
    divider: {
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'gray'
    }
})
