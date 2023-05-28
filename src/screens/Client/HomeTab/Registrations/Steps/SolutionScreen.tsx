import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { solutions } from '../../../../../components/solutions'
import ItemCard from '../../../../../components/ItemCard'
import HeaderRegister from '../../../../../components/HeaderRegister'
import { QuickRegistrationDataType } from '../../../../../types/quickRegistrationData.type'

const { width, height } = Dimensions.get('window')

interface Props {
  setData: (data: any) => void
  step?: number
  setStep?: (step: number) => void
  handleClose?: () => void
}
const SolutionScreen = ({ setData, step, setStep, handleClose }: Props) => {
  const [stopFeeling, setStopFeeling] = useState(false)

  const renderItem = ({ item }: any) => (
    <ItemCard
      item={item}
      handlePress={() => {
        console.log('item', item.name)
        setData((prevData: QuickRegistrationDataType) => ({
          ...prevData,
          solution: item.name
        }))
        if (handleClose) handleClose()
        if (step && setStep) setStep(step + 1)
      }}
    />
  )

  const headerComponent = (title: string) => <HeaderRegister title={title} />

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>¿Sigues sintiéndote así?</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setData((prevData: QuickRegistrationDataType) => ({
                ...prevData,
                solution: 'No'
              }))
              if (handleClose) handleClose()
              if (step && setStep) setStep(step + 1)
              setStopFeeling(false)
            }}
          >
            <Text style={styles.buttonText}>Si</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setStopFeeling(true)
            }}
          >
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      {stopFeeling && (
        <FlatList
          style={{ height: height * 0.6, width: width }}
          data={solutions}
          renderItem={renderItem}
          numColumns={2}
          horizontal={false}
          ListHeaderComponent={() => headerComponent('¿Cómo se ha solucionado?')}
          stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll={false}
        />
      )}
      {!stopFeeling && (
        <View style={styles.subcontainer}>
          <Text style={styles.title}>Esperemos que esté todo bien</Text>
          <Image source={require('../../../../../assets/thinking.png')} style={styles.image} />
        </View>
      )}
    </View>
  )
}

export default SolutionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: 12,
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
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
  }
})
