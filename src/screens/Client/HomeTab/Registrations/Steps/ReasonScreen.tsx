import { FlatList, View } from 'react-native'
import React from 'react'
import { reasons } from '../../../../../components/reasons'
import ItemCard from '../../../../../components/ItemCard'
import HeaderRegister from '../../../../../components/HeaderRegister'
import { QuickRegistrationDataType } from '../../../../../types/quickRegistrationData.type'

interface Props {
  setData: (data: any) => void
  step?: number
  setStep?: (step: number) => void
  handleClose?: () => void
}

const ReasonScreen = ({ setData, step, setStep, handleClose }: Props) => {
  const renderItem = ({ item }: any) => (
    <ItemCard
      item={item}
      handlePress={() => {
        console.log('item', item)
        setData((prevData: QuickRegistrationDataType) => ({ ...prevData, reason: item.name }))
        if (handleClose) handleClose()
        if (step && setStep) setStep(step + 1)
      }}
    />
  )

  const headerComponent = ({ title }: any) => <HeaderRegister title={title} />

  return (
    <View>
      <FlatList
        data={reasons}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={() => headerComponent({ title: '¿Qué lo ha causado?' })}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={false}
      />
    </View>
  )
}

export default ReasonScreen
