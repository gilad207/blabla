import { StatusBar, StyleSheet } from 'react-native'

export const statusBarHeight = StatusBar.currentHeight;

export const GlobalStyles = StyleSheet.create({
    searchbar: {
        borderRadius: 20,
        marginTop: 30,
        marginBottom: statusBarHeight,
        alignSelf: 'center',
        height: 50,
        width:'90%',
    },

    screenContainer: {
        flex: 1, backgroundColor: 'white'
    }
})

