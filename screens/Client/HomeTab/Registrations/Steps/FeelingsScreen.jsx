import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { feelings } from "../../../../../components/feelings";

const FeelingsScreen = ({ setData, setStep  }) => {
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  const toggleFeeling = (item) => {
    console.log(item.id);

      setData((prevData) => ({ ...prevData, feeling: item.name }));
      setStep(2);
  };
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> = </Text>
        <Text style={styles.title}>¿Cómo te sientes?</Text>
      </View>
      <FlatList
        data={feelings}
        renderItem={({ item }) => (
          <Pressable onPress={() =>toggleFeeling(item)}
            style={[
              styles.itemCard,
              { backgroundColor: item?.color },
              { borderColor: selectedFeeling === item.name ? "#000" : "#fff" },
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
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default FeelingsScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 16,
    marginLeft: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#3253FF",
  },
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
});
