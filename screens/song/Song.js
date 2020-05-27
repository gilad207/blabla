import React, { useState } from 'react';
import { Card, IconButton, Divider, Chip, List, DataTable } from 'react-native-paper';
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import HeeboText from '../../components/HeeboText';
import { DATA } from '../../assets/Data'
import { FlatList } from 'react-native-gesture-handler';
import { GlobalStyles } from '../../GlobalStyles'

export default function Song({ route, navigation }) {

    const downloadAvailable = 'זמין להורדה';

    return (
        <View style={GlobalStyles.screenContainer}>
            <View style={GlobalStyles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <IconButton
                        icon='chevron-right'
                        size={35}
                        onPress={() => navigation.goBack()}
                    />
                    <HeeboText bold size={30} marginTop={10}>{route.params.name}</HeeboText>
                </View>
                <IconButton
                    style={{ marginRight: 40 }}
                    icon='graphql'
                    size={40}
                    onPress={() => navigation.navigate('Related', { name: route.params.name })}
                />
            </View>
            <View style={styles.section}>
                <View>
                    <Text style={styles.sectionTitle}>בלהבלה1</Text>
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
                    <Text style={styles.sectionTitle}>בלהבלה4</Text>
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
                    <Text style={{ fontSize: 22 }}>בלהבלה5</Text>
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

            <View style={styles.section}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.sectionTitle}>בלהבלה6</Text>
                </View>
                <FlatList
                    style={{ marginTop: 5, height: 510 }}
                    data={DATA}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: '15%' }}>
                                <Text style={styles.smallText}>{item.key}</Text>
                            </View>
                            <View style={{ width: '30%', alignSelf: 'center', }}>
                                <Text style={styles.smallText}>01.01.2020 - 01.01.2021</Text>
                            </View>
                            <View style={{ width: '15%', height: 40, alignSelf: 'flex-end' }}>
                                <Text style={styles.boldSmallText}>{item.availability}</Text>
                            </View>
                            <View>
                                {item.availability == downloadAvailable && <IconButton icon='download' size={26} />}
                            </View>
                            <Divider />
                        </View>
                    } />
            </View>
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
    sectionTitle: {
        fontFamily: 'Heebo-Bold',
        fontSize: 26,
    },
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
