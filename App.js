import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Header from './src/components/Header'
import ItemDisplay from './src/components/ItemDisplay/ItemDisplay'
import patistore_products from './src/patistore-items.json'


function App(){
  
  const renderProducts = ({item}) => <ItemDisplay products={item}/>
  const productId = item => item.id.toString();
  
  return (
    <View style={styles.container} > 
      <Header/>
      <FlatList
      numColumns= '2'
      renderItem={renderProducts}
      data={patistore_products}
      keyExtractor={productId}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App