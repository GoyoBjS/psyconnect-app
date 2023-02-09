import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'

const ItemCard = ({ item, selectedItem, setSelectedItem, setData, setStep }) => {

    const handlePress = () => {
        setSelectedItem(item.name)
        setData((prevData) => ({ ...prevData, feeling: item.name }));
        setStep(2);
    }
  return (
    <Pressable onPress={handlePress}
            style={[
              styles.itemCard,
              { backgroundColor: item?.color },
              { borderColor: selectedItem === item.name ? "#000" : "#fff" },
            ]}
          >
            <View>
              <View style={styles.imageContainer}>
                <Image
                  source={item?.image}
                  style={styles.itemImage}
                  resizeMode="contain"
                  resizeMethod="resize"
                />
              </View>
              <Text style={styles.textFeeling}>{item.name}</Text>
            </View>
          </Pressable>
  )
}

export default ItemCard

const styles = StyleSheet.create({
    itemCard: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "45%",
        height: 250,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
    imageContainer: {
        paddingHorizontal: 20,
      },
      itemImage: {
        width: "100%",
        height: 180,
      },
      textFeeling: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: "bold",
        color: "#FFF",
      },
})