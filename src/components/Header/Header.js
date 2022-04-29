import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Header.style'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>PATIKASTORE</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Ara...'
            />
        </View>
    )
}

export default Header;