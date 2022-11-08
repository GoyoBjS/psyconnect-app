import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
// import feeling from '../../../../../a'

const FEELINGS = [
  {
    id: 1,
    image: require("../../../../../assets/feelings/angry.png"),
    feeling: "Angry",
    backgroundColor: "#F4C534",
  },
  {
    id: 2,
    image: require("../../../../../assets/feelings/angry.png"),
    feeling: "Anxious",
    backgroundColor: "#667EFF",
  },
  {
    id: 3,
    image: require("../../../../../assets/feelings/angry.png"),
    feeling: "Depressed",
    backgroundColor: "#DDCC34",
  },
  {
    id: 4,
    image: require("../../../../../assets/feelings/angry.png"),
    feeling: "Guilt",
    backgroundColor: "#06C60E",
  },
  {
    id: 5,
    image: require("../../../../../assets/feelings/angry.png"),
    feeling: "Lonely",
    backgroundColor: "#CCBB34",
  },
  {
    id: 6,
    image: require("../../../../../assets/feelings/angry.png"),
    feeling: "Sad",
    backgroundColor: "#F364FF",
  },
  {
    id: 7,
    image: require("../../../../../assets/feelings/angry.png"),
    feeling: "Stressed",
    backgroundColor: "#CCBB34",
  },
  {
    id: 8,
    image: require("../../../../../assets/feelings/angry.png"),
    feeling: "Tired",
    backgroundColor: "#CCBB34",
  },
  {
    id: 9,
    image: require("../../../../../assets/feelings/angry.png"),
    feeling: "Worried",
    backgroundColor: "#CCBB34",
  },
];

const FeelingsScreen = ({ setData }) => {
  const [feelings, setFeelings] = useState(FEELINGS);
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  const toggleFeeling = (item) => {
    console.log(item.id);
    if (selectedFeeling === item.feeling) {
      console.log("same");
      setSelectedFeeling(null);
    } else {
      setSelectedFeeling(item.feeling);
    }
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
              { backgroundColor: item?.backgroundColor },
              { borderColor: selectedFeeling === item.feeling ? "#000" : "#fff" },
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
              <Text style={styles.textFeeling}>{item.feeling}</Text>
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
