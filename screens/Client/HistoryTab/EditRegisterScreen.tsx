import { StyleSheet, Text, Pressable, Image, ScrollView, Dimensions } from 'react-native'
import React, {useEffect, useState} from 'react'
import { feelings, Feelings } from "../../../components/feelings";
import FeelingsScreen from "../HomeTab/Registrations/Steps/FeelingsScreen";
import {doc, setDoc, updateDoc} from "firebase/firestore";
import {db} from "../../../config/firebase";

const WIDTH = Dimensions.get("window").width;

const EditRegisterScreen = ({
    navigation,
    route: {
        params: { item },
    },
}: any) => {
    const [feelingData, setFeelingData] = useState<Feelings>();
    const [data, setData] = useState<any>(item);

    const [showFeelingsScreen, setShowFeelingsScreen] = useState<boolean>(false);

    useEffect(() => {
        setFeelingData((feeling) => feelings.find((feeling: Feelings): boolean => feeling.name === item.feeling));
    },[])

    const handlePress = (item: any) => {
        setShowFeelingsScreen(true);
        console.log("HandlePress", data.feeling);
    }

    const handleClose = async () => {
        console.log("HandleClose", data.feeling);
        setShowFeelingsScreen(false);
    }

    useEffect(() => {
        const updateFeeling = async () => {
            console.log("UpdateFeeling", data.feeling);
            const historyRef = doc(db, "history", data.id);
           await updateDoc(historyRef, {
                feeling: data.feeling,
            });
        }
         updateFeeling()
             .then(() =>
                 setData({
                     ...data,
                feeling: data.feeling,
             }))
             .then(() =>{
                 setFeelingData(feelings.find((feeling: Feelings): boolean => feeling.name === data.feeling));
         });
    }, [data.feeling]);
    
  return (
      <>
          {showFeelingsScreen && <FeelingsScreen data={data} setData={setData} handleClose={handleClose}/>}
        <ScrollView>
          <Text style={{ fontSize: 24, fontWeight: "bold", margin: 12 }}>
            Editar registro
          </Text>

          <Text style={styles.title}>¿Cómo te sientes?</Text>
          <Pressable
            style={[
              styles.card,
              { backgroundColor: feelingData ? feelingData.color : feelings[0].color },
            ]}
            onPress={() => handlePress(data)}
          >
             <Image
              source={feelingData ? feelingData.image : feelings[0].image}
              style={styles.cardImage}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Text style={styles.text}>{data.feeling}</Text>
          </Pressable>


          {/* <Text>{id}</Text>
            <Text>{feeling}</Text>
            <Text>{reason}</Text>
            <Text>{date}</Text>
            <Text>{time}</Text>
            <Text>{timestamp}</Text>
            <Text>{solution}</Text> */}
        </ScrollView>
      </>
  )
}

export default EditRegisterScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 12,
        color: "#667EFF",
    },
  card: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: WIDTH - 24,
    height: 100,
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 16,
      alignItems: "center",
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
    text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    }
})