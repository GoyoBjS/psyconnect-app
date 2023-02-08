import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import FeelingsScreen from './Steps/FeelingsScreen'
import ReasonScreen from './Steps/ReasonScreen'

const QuickRegistrationScreen = () => {
    const [step, setStep] = useState(1)
    const [data, setData] = useState({
        feeling: '',
        reason: '',
        date: '',
        time: '',
    })
  return (
    <View>
      {step === 1 && <FeelingsScreen data={data} setData={setData} setStep={setStep} />}
      {step === 2 && <ReasonScreen data={data} setData={setData} setStep={setStep} />}
        {/* Here we take the time when the data is sent */}
    </View>
  )
}

export default QuickRegistrationScreen

const styles = StyleSheet.create({})