import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileStack from "./Stacks/ProfileStack";
import HomeStack from "./Stacks/HomeStack";
import HistoryStack from "./Stacks/HistoryStack";

const RootTabScreens = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={"Feed"}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#e91e63",
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 5,
          paddingTop: 0,
          paddingBottom: 10,
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
      })}
    >
        <Tab.Screen
          name="Calendario"
          component={HistoryStack}
          options={{
            // tabBarIcon: ({ size, focused, color }) => {
            //   return <Icon name="sc-telegram" type="evilicon" color="#517fa4" />;
            // },
          }}
        />
      <Tab.Screen
        name="Registrar"
        component={HomeStack}
        options={{
        //   tabBarIcon: ({ size, focused, color }) => {
        //     return <Icon name="sc-telegram" type="evilicon" color="#517fa4" />;
        //   },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileStack}
        options={{
        //   tabBarIcon: ({ size, focused, color }) => {
        //     return <Icon name="sc-telegram" type="evilicon" color="#517fa4" />;
        //   },
        }}
      />
    </Tab.Navigator>
  );
};

export default RootTabScreens;
