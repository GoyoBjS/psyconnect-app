import {useEffect, useState} from "react";
import * as SecureStore from "expo-secure-store";
import { getAuth } from "firebase/auth";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../config/firebase";

const useUser = () => {
    const [user, setUser] = useState();

    async function updateUser(user: any) {
        console.log("updateUser", user)
        if (user) return SecureStore.setItemAsync("user", JSON.stringify(user));
        const { currentUser } = getAuth();
        const docRef = doc(db, "users", currentUser.uid);
        getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
                setUser(docSnap.data());
                return SecureStore.setItemAsync("user", JSON.stringify(docSnap.data()));
            }
            setUser(null);
        });
    }

    async function getUser(): Promise<any> {
        let user;
        const userData = await SecureStore.getItemAsync("user");
        console.log("getUser", userData)
        if (userData) {
            user = JSON.parse(userData);
            // return setUser((user) =>user = JSON.parse(userData));
        }
        const { currentUser } = getAuth();
        console.log("currentUser", currentUser)
        const docRef = doc(db, "users", currentUser.uid);
        getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
                user = docSnap.data();
                // return setUser(docSnap.data());
            }
            // setUser(null);
        });

        return user
    }
    async function deleteUser() {
        setUser(null);
        return SecureStore.deleteItemAsync("user");
    }

    return { user, updateUser, getUser, deleteUser };
};

export default useUser;
