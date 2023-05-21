import React, { useEffect, useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../config/firebase'
import { Dimensions, Image, Pressable, StyleSheet, Text } from 'react-native'

const WIDTH = Dimensions.get('window').width

interface Props {
  handlePress: (screenName: string) => void
  data: any
  setData: (data: any) => void
  title: string
  element: string
  styleData?: any
}

const ElementToModify = ({ handlePress, data, setData, title, element, styleData }: Props) => {
  const [elementData, setElementData] = useState<any>()

  useEffect(() => {
    const updateElement = async () => {
      console.log('UpdateElement', data[element])
      const historyRef = doc(db, 'history', data.id)
      await updateDoc(historyRef, {
        [element]: data[element]
      })
    }
    updateElement()
      .then(() =>
        setData({
          ...data,
          [element]: data[element]
        })
      )
      .then(() => {
        console.log('ElementToModify', data[element])
        setElementData(styleData.find((e: any): boolean => e.name === data[element]))
      })
  }, [data[element]])
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        style={[
          styles.card,
          { backgroundColor: elementData ? elementData.color : styleData[0].color }
        ]}
        onPress={() => handlePress(element)}
      >
        <Image
          source={elementData ? elementData.image : styleData[0].image}
          style={styles.cardImage}
          resizeMode="contain"
          resizeMethod="resize"
        />
        <Text style={styles.text}>{data[element]}</Text>
      </Pressable>
    </>
  )
}

export default ElementToModify

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 12,
    color: '#667EFF'
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: WIDTH - 24,
    height: 100,
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 16,
    alignItems: 'center',
    backgroundColor: '#667EFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cardImage: {
    width: 72,
    height: 72,
    marginRight: 20
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
})
