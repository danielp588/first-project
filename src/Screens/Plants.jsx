import { FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import items from '../Data/items.json'
import ItemCard from '../Components/ItemCard';

export default function Plants() {

  const [list, SetList] = useState([]);

  const GetList = () => {
    try {
      SetList(items);
      console.log("Plant list imported.");
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(()=>{
    GetList();
  },[]);

  return (
    <FlatList
      data = {list}
      renderItem = {({item}) => <ItemCard {...item}/>}
      keyExtractor={(item) => item.id}
    />
  )
}