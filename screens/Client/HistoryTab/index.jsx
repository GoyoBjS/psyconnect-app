import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
  SectionList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import getFullDescriptionOfDate from "../../../utils/getFullDescriptionOfDate";
import { feelings } from "../../../components/feelings";

const WIDTH = Dimensions.get("window").width;

const HistoryScreen = () => {
  const [selectedFeeling, setSelectedFeeling] = useState(null);
  const [data, setData] = useState([
    {
      id: 1,
      feeling: "Triste",
      reason: "No tengo amigos",
      date: "2022/11/09",
      time: "12:00",
      timestamp: 1619827200,
      solution: "Hacer ejercicio",
    },
    {
      id: 2,
      feeling: "Triste",
      reason: "No tengo amigos",
      date: "2022/11/08",
      time: "12:00",
      timestamp: 1619827200,
      solution: "No",
    },
    {
      id: 3,
      feeling: "Cansado",
      reason: "No se",
      date: "2021/06/01",
      time: "16:00",
      timestamp: 1622540800,
      solution: "No",
    },
    {
      id: 4,
      feeling: "Enfadado",
      reason: "No seeeee",
      date: "2021/06/01",
      time: "16:00",
      timestamp: 1668012530800,
      solution: "No",
    },
    {
      id: 5,
      feeling: "Enfadado",
      reason: "No se",
      date: "2021/06/01",
      time: "16:00",
      timestamp: 1668022540800,
      solution: "No",
    },
    {
      id: 6,
      feeling: "Enfadado",
      reason: "No se",
      date: "2021/06/01",
      time: "16:00",
      timestamp: 1668022540800,
      solution: "No",
    },
    {
      id: 7,
      feeling: "Enfadado",
      reason: "No se",
      date: "2021/06/01",
      time: "16:00",
      timestamp: 1668022540800,
      solution: "No",
    },
    {
      id: 7,
      feeling: "Lo que sea",
      reason: "No se",
      date: "2023/02/05",
      time: "16:00",
      timestamp: 1619827200,
      solution: "No",
    },
    {
      id: 7,
      feeling: "Lo que seaaaaaaa",
      reason: "No seeee",
      date: "2023/02/05",
      time: "17:00",
      timestamp: 1619827200,
      solution: "No",
    },
    {
      id: 7,
      feeling: "Enfadado",
      reason: "No se",
      date: "2021/06/01",
      time: "16:00",
      timestamp: 1668022540800,
      solution: "No",
    },
    {
      id: 7,
      feeling: "Lo que sea",
      reason: "No se",
      date: "2023/02/08",
      time: "16:00",
      timestamp: 1619827200,
      solution: "No",
    },
    {
      id: 7,
      feeling: "Lo que seaaaaaaa",
      reason: "No seeee",
      date: "2023/02/07",
      time: "17:00",
      timestamp: 1619827200,
      solution: "No",
    },
  ]);
// Podemos cambiar este sort por el timestamp cuando lo tengamos
  let sortedData = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  let newData = Object.values(
    sortedData.reduce((acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = {
          date: getFullDescriptionOfDate(item.date),
          data: [],
        };
      }
      acc[item.date].data.push(item);
      return acc;
    }, {})
  );
    console.log(newData.date);

  const getImage = (feeling) => {
    switch (feeling) {
      case "Triste":
        return require("../../../assets/feelings/sad.png");
      // case "Cansado":
      //   return require("../../../assets/feelings/tired.png");
      case "Enfadado":
        return require("../../../assets/feelings/angry.png");
      // case "Depresivo":
      //   return require("../../../assets/feelings/depressed.png");
      // case "Culpable":
      //   return require("../../../assets/feelings/guilt.png");
      // case "Solo":
      //   return require("../../../assets/feelings/lonely.png");
      // case "Estresado":
      //   return require("../../../assets/feelings/stressed.png");
      default:
        return require("../../../assets/feelings/sad.png");
    }
  };

  const getBackgroundColor = (feeling) => {
    switch (feeling) {
      case "Triste":
        return "#667EFF";
      // case "Cansado":
      //   return "#CCBB34";
      case "Enfadado":
        return "#F4C534";
      // case "Ansioso":
      //   return "#667EFF";
      // case "Depresivo":
      //   return "#DDCC34";
      // case "Culpable":
      //   return "#06C60E";
      // case "Solo":
      //   return "#CCBB34";
      // case "Estresado":
      //   return "#CCBB34";
      default:
        return "#F364FF";
    }
  };

  const renderItem = ({ item }) => {
    return (
      <Pressable
        style={[
          styles.card,
          { backgroundColor: getBackgroundColor(item.feeling) },
        ]}
        onPress={() => handlePress(item)}
      >
        <Image
          source={getImage(item.feeling)}
          style={styles.cardImage}
          resizeMode="contain"
          resizeMethod="resize"
        />
        <View style={styles.cardMain}>
          <Text style={styles.cardTitle}>{item.feeling}</Text>
          <Text style={styles.cardReason}>{item.reason}</Text>
        </View>
        <View style={styles.cardExtra}>
          <Text style={styles.cardTime}>{item.time}</Text>
          <View style={styles.cardSolution}>
            <Text style={styles.textSolution}>Resuelto</Text>
            <Text style={styles.textSolution}>{item.solution}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  const renderSectionHeader = ({ section: { date } }) => {
    console.log(date);
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{date}</Text>
      </View>
    );
  };

  const handlePress = (item) => {
    console.log(item);
  };
  const handleFeelingPress = (feeling) => {
    if (selectedFeeling === feeling) {
      setSelectedFeeling();
      // getAllProducts();
    } else {
      setSelectedFeeling(feeling);
      // search in the database for the products that match the Feeling
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Registros</Text>
      </View>
      <ScrollView 
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
      style={styles.feelingsContainer}
      >
        {feelings.map((feeling) => (
          <Pressable
            style={[
              styles.feelingContainer,
              selectedFeeling === feeling.name &&
                styles.selectedFeelingContainer,
            ]}
            key={feeling.id}
            onPress={() => handleFeelingPress(feeling.name)}
          >
            <Text
              style={[
                styles.feelingText,
                selectedFeeling === feeling.name && styles.selectedFeelingText,
              ]}
            >
              {feeling.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <SectionList
        sections={newData}
        keyExtractor={(item, index) => item + index}
        renderItem={(item) => renderItem(item)}
        renderSectionHeader={(item) => renderSectionHeader(item)}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginTop: 12,
    marginBottom: 0,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginLeft: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#3253FF",
  },
  sectionHeader: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  sectionHeaderText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3253FF",
  },
  feelingsContainer: {
    flexDirection: "row",
    marginBottom: 16,
    marginLeft: 20,
  },
  feelingContainer: {
    backgroundColor: "#D9D9D9",
    borderRadius: 8,
    marginRight: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedFeelingContainer: {
    backgroundColor: "#3253FF",
  },
  feelingText: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    height: 26,
  },
  selectedFeelingText: {
    color: "white",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: WIDTH * 0.95,
    height: 100,
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: "#667EFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: 72,
    height: 72,
    marginRight: 20,
  },
  cardMain: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  cardReason: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  cardExtra: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flex: 1,
  },
  cardTime: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  cardSolution: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  textSolution: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
