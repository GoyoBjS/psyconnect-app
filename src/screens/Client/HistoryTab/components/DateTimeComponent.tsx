import React, { useEffect } from 'react'
import { Dimensions, Image, Pressable, StyleSheet, Text } from 'react-native'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../../../../config/firebase'

const WIDTH = Dimensions.get('window').width

interface Props {
  handlePress: (screenName: string) => void
  data: any
  setData: (data: any) => void
  title: string
  element: string
  styleData?: any
}

const DateTimeComponent = ({ handlePress, data, setData, title, element }: Props) => {
  const { date, time } = data

  useEffect(() => {
    const currentTimestamp = new Date(`${date} ${time}`).getTime()
    const updateElement = async () => {
      const historyRef = doc(db, 'history', data.id)
      await updateDoc(historyRef, {
        date,
        time,
        timestamp: currentTimestamp
      })
    }
    updateElement().then(() =>
      setData({
        ...data,
        date,
        time,
        timestamp: currentTimestamp
      })
    )
  }, [date, time])
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        style={[styles.card, { backgroundColor: '#808080' }]}
        onPress={() => handlePress(element)}
      >
        <Image
          source={require('../../../../assets/calendar.png')}
          style={styles.cardImage}
          resizeMode="contain"
          resizeMethod="resize"
        />
        <Text style={styles.text}>{date}</Text>
        <Text style={styles.text}> - </Text>
        <Text style={styles.text}>{time}</Text>
      </Pressable>
    </>
  )
}

export default DateTimeComponent

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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
})
