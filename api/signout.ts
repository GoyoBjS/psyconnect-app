import {useCallback, useState, useEffect} from "react";
import * as SecureStore from "expo-secure-store";
import useUser from "../hooks/useUser";
import { useNavigation } from "@react-navigation/native";


export const signout = () => {
    console.log("signout");

    const navigation = useNavigation();
    const {user, deleteUser} = useUser();
    useEffect(() => {
      deleteUser();
      navigation.navigate("Login");
    }, [])
}