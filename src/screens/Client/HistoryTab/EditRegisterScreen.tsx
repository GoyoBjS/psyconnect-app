import { Pressable, ScrollView, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { feelings } from '../../../components/feelings'
import { reasons } from '../../../components/reasons'
import FeelingsScreen from '../HomeTab/Registrations/Steps/FeelingsScreen'
import ReasonScreen from '../HomeTab/Registrations/Steps/ReasonScreen'
import ElementToModify from './components/ElementToModify'
import { solutions } from '../../../components/solutions'
import SolutionScreen from '../HomeTab/Registrations/Steps/SolutionScreen'
import DateTimeComponent from './components/DateTimeComponent'
import DateTimeScreen from '../HomeTab/Registrations/Steps/DateTimeScreen'
import { db } from '../../../config/firebase'
import { deleteDoc, doc } from 'firebase/firestore'

const EditRegisterScreen = ({
  navigation,
  route: {
    params: { item }
  }
}: any) => {
  const [data, setData] = useState<any>(item)
  const [showEditScreen, setShowEditScreen] = useState<string>('')

  const handlePress = (screenName: string) => setShowEditScreen(screenName)
  const handleClose = async () => setShowEditScreen('')

  const deleteRegister = () => {
    const updateElement = async () => {
      await deleteDoc(doc(db, 'history', data?.id))
    }
    updateElement().then(() => {
      setData(data)
      navigation.goBack()
    })
  }

  return (
    <>
      {showEditScreen === 'feeling' && (
        <FeelingsScreen setData={setData} handleClose={handleClose} />
      )}
      {showEditScreen === 'reason' && <ReasonScreen setData={setData} handleClose={handleClose} />}
      {showEditScreen === 'solution' && (
        <SolutionScreen setData={setData} handleClose={handleClose} />
      )}
      {showEditScreen === 'dateTime' && (
        <DateTimeScreen data={data} setData={setData} handleClose={handleClose} />
      )}
      {!showEditScreen && (
        <ScrollView>
          <ElementToModify
            data={data}
            setData={setData}
            title="¿Cómo te sientes?"
            element="feeling"
            handlePress={handlePress}
            styleData={feelings}
          />
          <ElementToModify
            data={data}
            setData={setData}
            title="¿Qué lo ha causado?"
            element="reason"
            handlePress={handlePress}
            styleData={reasons}
          />
          <DateTimeComponent
            data={data}
            setData={setData}
            title="¿Cuándo ha sido?"
            element="dateTime"
            handlePress={handlePress}
          />
          <ElementToModify
            data={data}
            setData={setData}
            title="¿Se ha solucionado?"
            element="solution"
            handlePress={handlePress}
            styleData={solutions}
          />
          <Pressable style={styles.deleteButton} onPress={deleteRegister}>
            <Text style={styles.deleteButtonText}>Borrar Registro</Text>
          </Pressable>
        </ScrollView>
      )}
    </>
  )
}

export default EditRegisterScreen

const styles = StyleSheet.create({
  deleteButton: {
    marginHorizontal: 16,
    marginVertical: 32,
    backgroundColor: '#ff2e40',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  }
})
