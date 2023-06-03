import { ScrollView } from 'react-native'
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

const EditRegisterScreen = ({
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
        </ScrollView>
      )}
    </>
  )
}

export default EditRegisterScreen
