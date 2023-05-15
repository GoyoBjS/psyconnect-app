import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import React, { useState } from "react";
import { feelings } from "../../../../../components/feelings";
import ItemCard from "../../../../../components/ItemCard";
import HeaderRegister from "../../../../../components/HeaderRegister";
interface Props {
    data: any;
    setData: (data: any) => void;
    step?: number;
    setStep?: (step: number) => void;
    handleClose?: () => void;
}
const FeelingsScreen = ({ data, setData, step, setStep, handleClose }: Props) => {

  const renderItem = ({ item }: any) => (
    <ItemCard
      item={item}
      handlePress={() => {
          console.log("item", item.name);
        setData((prevData: any) => ({ ...prevData, feeling: item.name }));
        if (handleClose) handleClose();
        if (step && setStep) setStep(step + 1);
        }
      }
    />
  );

  const headerComponent = (title: string) => <HeaderRegister title={title} />;

  return (
    <View>
      <FlatList
        data={feelings}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={() =>
          headerComponent("¿Cómo te sientes?" )
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