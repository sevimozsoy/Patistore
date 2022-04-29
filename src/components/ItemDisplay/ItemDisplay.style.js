import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#eceff1',
        borderRadius: 5
    },
    productImage: {
        flex: 1,
        height: Dimensions.get('window').height / 3,
        resizeMode: 'contain',
        borderRadius: 5,
        margin: 10

    },

    text_position: {
        flex: 1,
    },

    product_title: {
        flex: 1,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 10,
        fontSize: 18
    },
    price: {
        flex: 1,
        fontWeight: 'bold',
        color: 'darkgray',
        paddingLeft: 10,
        paddingBottom:10,
        textAlignVertical: 'bottom'
    },
    stock: {
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingBottom: 10
    }
})