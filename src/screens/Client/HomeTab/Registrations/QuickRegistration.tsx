import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FeelingsScreen from './Steps/FeelingsScreen'
import ReasonScreen from './Steps/ReasonScreen'
import {
  extractDateFromTimestamp,
  extractTimeFromTimestamp
} from '../../../../utils/extractDateTimeFromTimestamp'
import { QuickRegistrationDataType } from '../../../../types/quickRegistrationData.type'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../../config/firebase'
import { getAuth } from 'firebase/auth'
import useUser from '../../../../hooks/useUser'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const QuickRegistrationScreen = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<QuickRegistrationDataType>(() => {
    return {} as QuickRegistrationDataType
  })
  const auth = getAuth()
  const { getUser } = useUser()
  const navigation: NavigationProp<any> = useNavigation()
  async function instertData(data: QuickRegistrationDataType) {
    const user = auth.currentUser || (await getUser())
    const { feeling, reason, solution } = data
    const timestamp = Date.now()
    const time = extractTimeFromTimestamp(timestamp)
    const date = extractDateFromTimestamp(timestamp)
    try {
      await addDoc(collection(db, 'history'), {
        userId: user.uid,
        feeling,
        reason,
        solution: 'No',
        date,
        time,
        timestamp
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (step === 3) {
      instertData(data).then(() => {
        setStep(1)
        setData(() => {
          return {} as QuickRegistrationDataType
        })
        navigation.navigate('Home')
      })
    }
  }, [step])

  return (
    <View>
      <>
        {step === 1 && (
          <FeelingsScreen data={data} setData={setData} step={step} setStep={setStep} />
        )}
        {step === 2 && <ReasonScreen data={data} setData={setData} step={step} setStep={setStep} />}
      </>
    </View>
  )
}

export default QuickRegistrationScreen
