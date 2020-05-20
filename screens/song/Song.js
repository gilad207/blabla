import React from 'react';
import { statusBarHeight } from '../../GlobalStyles'
import { Title, Card, Divider, Chip } from 'react-native-paper';
import { View, StyleSheet } from 'react-native'
import HeeboText from '../../components/HeeboText';
import { DATA } from '../../assets/Data'
import { FlatList } from 'react-native-gesture-handler';

export default function Song({ route }) {
    return (
        <View>
            <Card style={styles.card}>
                <Card.Title title={route.params.name} />
                <Card.Content>
                    <HeeboText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
            </HeeboText>
                </Card.Content>
                <Divider />
                <View style={{}}>
                    <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={({ item }) =>
                            <Chip style={styles.chip}
                                textStyle={{ fontSize: 20, }}>
                                {item.key}
                            </Chip>
                        } />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        marginTop: 3 * statusBarHeight,
        width: '90%',
        height: '60%',
    },
    chip: {
        marginTop: 20,
        marginHorizontal: 10,
    }
});
