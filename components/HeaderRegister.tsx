import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
interface Props {
    title: string;
}
const HeaderRegister = ({title}: Props) => {
  return (
    <View style={styles.titleContainer}>
      <Ionicons name="arrow-back-outline" size={42} color="#3253FF" />
        <Text style={styles.title}>{title}</Text>
      </View>
  )
}

export default HeaderRegister

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: "#F5F5F5",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        paddingLeft: 10,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
      },
      title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#3253FF",
      },
})