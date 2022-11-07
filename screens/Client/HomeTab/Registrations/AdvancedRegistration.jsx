import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import FeelingsScreen from './Steps/FeelingsScreen'
import ReasonScreen from './Steps/ReasonScreen'

const AdvancedRegistrationScreen = () => {
    const [step, setStep] = useState(1)
    const [data, setData] = useState({
        feeling: '',
        reason: '',
        date: '',
        time: '',
        solution: '',
        description: '',
        image: '',
    })
  return (
    <View>
      <Text>HomeScreen</Text>
      {step === 1 && <FeelingsScreen data={data} setData={setData} setStep={setStep} />}
      {step === 2 && <ReasonScreen data={data} setData={setData} setStep={setStep} />}
      {/* {step === 3 && <DateTimeScreen data={data} setData={setData} setStep={setStep} />}
      {step === 5 && <SolutionScreen data={data} setData={setData} setStep={setStep} />}
        {step === 6 && <DetailsScreen data={data} setData={setData} setStep={setStep} />} */}
    </View>
  )
}

export default AdvancedRegistrationScreen

const styles = StyleSheet.create({})