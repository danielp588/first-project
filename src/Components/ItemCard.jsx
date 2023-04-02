import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'


export default function ItemCard({id,name,image,desc}) {
  return (
    <>
    <View style={[styles.border, styles.container]}>
      <View style={{maxWidth: '80%'}}>
        <Text>{id}</Text>
        <Text>{name}</Text>
        <Text>{desc}</Text>
      </View>
        <Image source={{uri: image}} style={{height: 100, width: 100}}></Image>
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    border: {
      flex: 1,
      flexDirection: 'row',
      maxWidth:'100%',
      padding: 15,
      borderWidth: '1',
      borderRadius:'30',
      borderColor:'green',
      marginTop: 5,
      backgroundColor:'pink'
    },
    space: {
      padding: 5
    }
  });
  