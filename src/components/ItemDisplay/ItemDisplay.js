import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './ItemDisplay.style'

const renderStock = (products) => {
    if (products === false) {
        return <Text style={styles.stock}>STOKTA YOK</Text>
    }
}

const ItemDisplay = ({ products }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.productImage} source={{ uri: products.imgURL }} />
            </View>
            <View style={styles.text_position}>
                <Text style={styles.product_title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
            </View>
            <View>
                {renderStock(products.inStock)}
            </View>

        </View>
    )
}

export default ItemDisplay;