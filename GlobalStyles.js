import { StyleSheet } from 'react-native'

export const GlobalStyles = StyleSheet.create({
    searchbar: {
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 25,
        alignSelf: 'center',
        height: 50,
        width: '90%',
    },

    screenContainer: {
        flex: 1, backgroundColor: 'white'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },

    fab: {
        position: 'absolute',
        margin: 75,
        right: 0,
        bottom: 0,
    },
})

