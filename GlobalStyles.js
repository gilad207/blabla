import { StatusBar, StyleSheet } from 'react-native'

export const statusBarHeight = StatusBar.currentHeight;

export const GlobalStyles = StyleSheet.create({
    searchbar: {
        elevation: 0,
        borderRadius: 20,
        marginTop: statusBarHeight * 2,
        marginBottom: statusBarHeight,
        alignSelf: 'center',
        height: 60,
    },
    contentContainer: {
        width: '90%'
    },
    screenContainer: {
        flex: 1, alignItems: 'center', backgroundColor: 'white'
    }
})

