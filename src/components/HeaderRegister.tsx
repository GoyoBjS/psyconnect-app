import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  title: string
  size?: number
}
const HeaderRegister = ({ title, size }: Props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={[styles.title, { fontSize: size ? size : 36 }]}>{title}</Text>
    </View>
  )
}

export default HeaderRegister

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingLeft: 16,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3253FF'
  }
})
