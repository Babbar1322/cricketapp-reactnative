import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: 30,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 5
    },
    btnInner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    squareBtn: {
        backgroundColor: '#337def',
        minWidth: screenWidth / 2.1,
        minHeight: screenWidth / 2.1,
        borderRadius: 20,
        padding: 10,
        marginVertical: 10,
        justifyContent: 'center'
    },
    fonts: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default styles;