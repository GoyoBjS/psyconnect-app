import { ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import { feelings } from '../../../components/feelings'
import { reasons } from '../../../components/reasons'
import FeelingsScreen from '../HomeTab/Registrations/Steps/FeelingsScreen'
import ReasonScreen from '../HomeTab/Registrations/Steps/ReasonScreen'
import ElementToModify from './components/ElementToModify'

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

  return (
    <>
      {showEditScreen === 'feeling' && (
        <FeelingsScreen setData={setData} handleClose={handleClose} />
      )}
      {showEditScreen === 'reason' && <ReasonScreen setData={setData} handleClose={handleClose} />}
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 12 }}>Editar registro</Text>
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
