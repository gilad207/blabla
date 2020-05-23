import React, { useState } from 'react';
import { statusBarHeight } from '../../GlobalStyles'
import { Card, IconButton, Divider, Chip, List, DataTable } from 'react-native-paper';
import { View, StyleSheet, ScrollView } from 'react-native'
import HeeboText from '../../components/HeeboText';
import { DATA } from '../../assets/Data'
import { FlatList } from 'react-native-gesture-handler';
import { GlobalStyles } from '../../GlobalStyles'

export default function Song({ route, navigation }) {
    const [isListExpanded, setListExpanded] = useState('false')

    const handleExpandList = () => {
        setListExpanded(!isListExpanded);
    }

    return (
        <View style={GlobalStyles.screenContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '95%', marginTop: 20, }}>
                <IconButton
                    icon='chevron-right'
                    size={35}
                    onPress={() => navigation.navigate('Playlist')}
                />
                <HeeboText bold size={30} marginTop={10}>{route.params.name}</HeeboText>
            </View>
            <View style={styles.section}>
                <View>
                    <HeeboText bold size={22}>בלהבלה1</HeeboText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <View style={{ marginTop: 20, marginRight: 60 }}>
                            <HeeboText size={20}>בלהבלה2</HeeboText>
                            <HeeboText bold size={22}>בלהבלה3</HeeboText>
                        </View>
                    </View>
                    <View>
                        <View style={{ marginTop: 20, marginRight: 60 }}>
                            <HeeboText size={20}>בלהבלה2</HeeboText>
                            <HeeboText bold size={22}>בלהבלה3</HeeboText>
                        </View>
                    </View>
                    <View>
                        <View style={{ marginTop: 20, }}>
                            <HeeboText size={20}>בלהבלה2</HeeboText>
                            <HeeboText bold size={22}>בלהבלה3</HeeboText>
                        </View>
                    </View>
                </View>
            </View>

            <Divider style={styles.divider} />

            <View style={styles.section}>
                <View>
                    <HeeboText bold size={22}>בלהבלה4</HeeboText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <View style={{ marginTop: 20, marginRight: 60 }}>
                            <HeeboText size={20}>בלהבלה2</HeeboText>
                            <HeeboText bold size={22}>בלהבלה3</HeeboText>
                        </View>
                    </View>
                    <View>
                        <View style={{ marginTop: 20, marginRight: 60 }}>
                            <HeeboText size={20}>בלהבלה2</HeeboText>
                            <HeeboText bold size={22}>בלהבלה3</HeeboText>
                        </View>
                    </View>
                    <View>
                        <View style={{ marginTop: 20, }}>
                            <HeeboText size={20}>בלהבלה2</HeeboText>
                            <HeeboText bold size={22}>בלהבלה3</HeeboText>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <View>
                    <HeeboText size={22}>בלהבלה5</HeeboText>
                </View>
                <FlatList
                    style={{ marginTop: 5 }}
                    horizontal={true}
                    data={DATA}
                    renderItem={({ item }) =>
                        <Chip style={styles.chip} mode='outlined'
                            textStyle={{ fontSize: 18, }}>
                            {item.key}
                        </Chip>
                    } />
            </View>

            <Divider style={styles.divider} />

            <View style={{ marginLeft: 30, marginTop: 20 }}>
                <List.Accordion style={{ width: '95%', }}
                    title="בלהבלה6"
                    titleStyle={{ fontFamily: 'Heebo-Bold', fontSize: 24, color: 'black' }}
                    left={props => <List.Icon icon="key" />}
                    expanded={isListExpanded}
                    onPress={handleExpandList}>
                    <DataTable style={{ height: 400, marginLeft: -30 }}>
                        <FlatList
                            style={{ marginTop: 5 }}
                            data={DATA}
                            renderItem={({ item }) =>
                                <DataTable.Row>
                                    <DataTable.Cell style={{ marginHorizontal: 0, }}>
                                        <HeeboText size={20}>{item.key}</HeeboText>
                                    </DataTable.Cell>
                                    <DataTable.Cell >
                                        <HeeboText size={20}>01.01.2020 - 01.01.2021</HeeboText>
                                    </DataTable.Cell>
                                    <DataTable.Cell numeric>
                                        <HeeboText bold size={20}>זמין להורדה</HeeboText>
                                    </DataTable.Cell>
                                </DataTable.Row>
                            } />
                    </DataTable>
                </List.Accordion>
            </View>

            <Divider style={styles.divider} />

            <View style={styles.section}>
                <View>
                    <HeeboText bold size={24}>רשת</HeeboText>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    divider: {
        marginTop: 35,
    },
    section: {
        marginTop: 25,
        marginLeft: 60,
    },
    chip: {
        marginTop: 20,
        marginRight: 20,
        height: 40,
        backgroundColor: 'white',
    },
});
