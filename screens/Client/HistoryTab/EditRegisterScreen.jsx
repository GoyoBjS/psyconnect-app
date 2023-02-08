import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EditRegisterScreen = ({
    navigation,
    route: {
        params: { item },
    },
}) => {
    const { id, feeling, reason, date, time, timestamp, solution } = item;
  return (
    <View>
      <Text>{id}</Text>
        <Text>{feeling}</Text>
        <Text>{reason}</Text>
        <Text>{date}</Text>
        <Text>{time}</Text>
        <Text>{timestamp}</Text>
        <Text>{solution}</Text>
    </View>
  )
}

export default EditRegisterScreen

const styles = StyleSheet.create({})