import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React, { useState } from 'react'
import { QuickRegistrationDataType } from '../../../../../types/quickRegistrationData.type'
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import {
  extractDateFromTimestamp,
  extractTimeFromTimestamp
} from '../../../../../utils/extractDateTimeFromTimestamp'
import { Ionicons } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

interface Props {
  data: QuickRegistrationDataType
  setData: (data: any) => void
  step?: number
  setStep?: (step: number) => void
  handleClose?: () => void
}

const DateTimeScreen = ({ data, setData, step, setStep, handleClose }: Props) => {
  const [showDateTime, setShowDateTime] = useState(false)
  const [date, setDate] = useState<Date>(new Date())
  const [time, setTime] = useState<Date>(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const onChangeDate = (event: DateTimePickerEvent, date: Date) => {
    const {
      nativeEvent: { timestamp }
    } = event
    setDate(date)
    setData((prevData: QuickRegistrationDataType) => ({
      ...prevData,
      date: extractDateFromTimestamp(timestamp!)
    }))
    setShowDatePicker(false)
  }

  const onChangeTime = (event: DateTimePickerEvent, date: Date) => {
    const {
      nativeEvent: { timestamp }
    } = event
    setTime(date)
    setData((prevData: QuickRegistrationDataType) => ({
      ...prevData,
      time: extractTimeFromTimestamp(timestamp!)
    }))
    setShowTimePicker(false)
  }

  const onSubmit = () => {
    if (!data?.date) {
      setData((prevData: QuickRegistrationDataType) => ({
        ...prevData,
        date: extractDateFromTimestamp(new Date().getTime())
      }))
    }
    if (!data?.time) {
      setData((prevData: QuickRegistrationDataType) => ({
        ...prevData,
        time: extractTimeFromTimestamp(new Date().getTime())
      }))
    }
    if (handleClose) handleClose()
    if (step && setStep) setStep(step + 1)
    setShowDateTime(false)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>¿Cuándo ha sido?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const time = extractTimeFromTimestamp(new Date().getTime())
              const date = extractDateFromTimestamp(new Date().getTime())

              setData((prevData: QuickRegistrationDataType) => ({
                ...prevData,
                time,
                date
              }))
              if (handleClose) handleClose()
              if (step && setStep) setStep(step + 1)
              setShowDateTime(false)
            }}
          >
            <Text style={styles.buttonText}>Ahora mismo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setShowDateTime(true)
            }}
          >
            <Text style={styles.buttonText}>En otro momento</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!showDateTime && (
        <View style={styles.subcontainer}>
          <Text style={styles.title}>Esperemos que esté todo bien</Text>
          <Image source={require('../../../../../assets/thinking.png')} style={styles.image} />
        </View>
      )}

      {showDateTime && (
        <View style={styles.subcontainer}>
          <Text style={styles.title}>Hora</Text>
          {Platform.OS !== 'ios' && (
            <>
              <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.iosInput}>
                <Ionicons name={'time-outline'} size={24} color={'#000'} />
                <Text style={styles.text}>
                  {data?.time || extractTimeFromTimestamp(new Date().getTime())}
                </Text>
              </TouchableOpacity>
              {showTimePicker && (
                <RNDateTimePicker
                  mode="time"
                  // @ts-ignore
                  onChange={onChangeTime}
                  value={time}
                  is24Hour={true}
                />
              )}
            </>
          )}
          {Platform.OS === 'ios' && (
            <View style={styles.iosInput}>
              <Ionicons name={'time-outline'} size={24} color={'#000'} />
              <RNDateTimePicker
                mode="time"
                // @ts-ignore
                onChange={onChangeTime}
                value={time}
              />
            </View>
          )}

          <Text style={styles.title}>Fecha</Text>
          {Platform.OS !== 'ios' && (
            <>
              <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.iosInput}>
                <Ionicons name={'calendar-outline'} size={24} color={'#000'} />
                <Text style={styles.text}>
                  {data?.date || extractDateFromTimestamp(new Date().getTime())}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <RNDateTimePicker
                  mode="date"
                  // @ts-ignore
                  onChange={onChangeDate}
                  value={date}
                  maximumDate={new Date()}
                />
              )}
            </>
          )}
          {Platform.OS === 'ios' && (
            <View style={styles.iosInput}>
              <Ionicons name={'calendar-outline'} size={24} color={'#000'} />
              <RNDateTimePicker
                mode="date"
                // @ts-ignore
                onChange={onChangeDate}
                value={date}
                maximumDate={new Date()}
                propsIOS={{
                  style: styles.iosInput
                }}
              />
            </View>
          )}
          <Pressable style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.buttonText}>Enviar</Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default DateTimeScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#3253FF'
  },
  buttonsContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    gap: 12
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3253FF',
    padding: 10,
    borderRadius: 10,
    width: width / 2.2,
    height: 80
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3253FF',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    width: width * 0.8,
    height: 72
  },
  subcontainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
    paddingHorizontal: 24,
    height: 400,
    marginTop: 16
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center'
  },
  input: {
    width: width - 48,
    paddingVertical: 24,
    paddingHorizontal: 12,
    color: '#FFFFFF',
    backgroundColor: '#2B2D32',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  iosInput: {
    width: width * 0.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 24,
    paddingHorizontal: 24,
    color: '#FFFFFF',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 12
  }
})
