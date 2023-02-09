import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import { feelings } from "../../../../../components/feelings";
import ItemCard from "../../../../../components/ItemCard";
import HeaderRegister from "../../../../../components/HeaderRegister";

const FeelingsScreen = ({ setData, setStep }) => {
  const [selectedFeeling, setSelectedFeeling] = useState(null);

  const renderItem = ({ item }) => (
    <ItemCard
      item={item}
      selectedItem={selectedFeeling}
      setSelectedItem={setSelectedFeeling}
      setData={setData}
      setStep={setStep}
    />
  );

  const headerComponent = ({ title }) => <HeaderRegister title={title} />;

  return (
    <View>
      <FlatList
        data={feelings}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={() =>
          headerComponent({ title: "¿Cómo te sientes?" })
        }
        // StickyHeaderComponent={() =>
        //   headerComponent({ title: "¿Cómo te sientes?" })
        // }
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={false}
      />
    </View>
  );
};

export default FeelingsScreen;