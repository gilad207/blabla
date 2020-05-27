import React, { useState } from 'react';
import { Card, IconButton, FAB, Divider, List, DataTable } from 'react-native-paper';
import { View, StyleSheet, Text, Image } from 'react-native'
import HeeboText from '../../components/HeeboText';
import { DATA } from '../../assets/Data'
import { FlatList } from 'react-native-gesture-handler';
import { GlobalStyles } from '../../GlobalStyles'
import Modal from 'react-native-modal';

export default function Related({ route, navigation }) {

    const [isModalVisible, setModalVisible] = useState(false)
    const [modalTitle, setModalTitle] = useState('')

    const openModal = (value) => {
        setModalTitle(value);
        setModalVisible(true);
    }

    return (
        <View style={GlobalStyles.screenContainer}>
            <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                <IconButton
                    icon='chevron-right'
                    size={35}
                    onPress={() => navigation.goBack()}
                />
                <HeeboText bold size={30} marginTop={10}>קשרים</HeeboText>
            </View>
            < FlatList
                data={DATA}
                renderItem={({ item }) =>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, flex: 1 }}>
                        <View style={styles.card}>
                            <Image style={styles.image} source={require('../../assets/images/switch.png')} />
                            <Card.Title title={item.key} titleStyle={{ fontSize: 22 }} subtitle={item.key} subtitleStyle={{ fontSize: 16 }} />
                        </View>
                        <IconButton
                            style={{ marginRight: 40 }}
                            icon='dots-horizontal'
                            size={40}
                            onPress={() => openModal(item.key)}
                        />
                    </View>
                } />

            <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)} style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', height: 250, marginBottom: -40, borderTopStartRadius: 15, borderTopEndRadius: 15, padding: 30, width: 800 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                        <Image style={{ height: 30, width: 80 }} source={require('../../assets/images/switch.png')} />
                        <Text style={{ fontSize: 22, marginTop: 0, marginLeft: 10 }}>{modalTitle}</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconButton icon='card-text' size={40} />
                        <Text style={styles.optionText}>פרטים</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconButton icon='minus-circle' size={40} />
                        <Text style={styles.optionText}>הסר</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconButton icon='lead-pencil' size={40} />
                        <Text style={styles.optionText}>בלה3</Text>
                    </View>
                </View>
            </Modal>

            < FAB
                style={GlobalStyles.fab}
                icon="plus"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    boldSmallText: {
        fontFamily: 'Heebo-Bold',
        fontSize: 20
    },
    smallText: {
        fontFamily: 'Heebo',
        fontSize: 20,
    },
    card: {
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        height: 30,
        width: 100,
        marginTop: 20
    },
    divider: {
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'gray'
    },
    optionText: {
        fontFamily: 'Heebo',
        fontSize: 22,
        marginLeft: 25,
    },
});
