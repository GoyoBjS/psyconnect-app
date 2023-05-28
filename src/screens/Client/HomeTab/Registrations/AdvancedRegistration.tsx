import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import ReasonScreen from './Steps/ReasonScreen'
import DateTimeScreen from './Steps/DateTimeScreen'
import SolutionScreen from './Steps/SolutionScreen'
import { QuickRegistrationDataType } from '../../../../types/quickRegistrationData.type'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../../config/firebase'
import { getAuth } from 'firebase/auth'
import useUser from '../../../../hooks/useUser'
import FeelingsScreen from './Steps/FeelingsScreen'

const AdvancedRegistrationScreen = () => {
  const auth = getAuth()
  const { getUser } = useUser()
  const navigation: NavigationProp<any> = useNavigation()
  const [step, setStep] = useState(1)
  const [data, setData] = useState<QuickRegistrationDataType>(() => {
    return {} as QuickRegistrationDataType
  })

  async function instertData(data: QuickRegistrationDataType) {
    const user = auth.currentUser || (await getUser())
    const { feeling, reason, solution, time, date } = data

    const timestamp = new Date(`${date} ${time}`).getTime()

    try {
      await addDoc(collection(db, 'history'), {
        userId: user.uid,
        feeling,
        reason,
        solution,
        date,
        time,
        timestamp
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (step === 5) {
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
      {step === 1 && <FeelingsScreen setData={setData} step={step} setStep={setStep} />}
      {step === 2 && <ReasonScreen setData={setData} step={step} setStep={setStep} />}
      {step === 3 && <DateTimeScreen data={data} setData={setData} step={step} setStep={setStep} />}
      {step === 4 && <SolutionScreen setData={setData} step={step} setStep={setStep} />}
    </View>
  )
}

export default AdvancedRegistrationScreen
