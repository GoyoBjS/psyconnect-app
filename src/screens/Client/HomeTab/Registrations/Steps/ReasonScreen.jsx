import { FlatList, View } from 'react-native'
import React, { useState } from 'react'
import { reasons } from '../../../../../components/reasons'
import ItemCard from '../../../../../components/ItemCard'
import HeaderRegister from '../../../../../components/HeaderRegister'

const ReasonScreen = ({ data, setData, step, setStep }) => {
  const [selectedReason, setSelectedReason] = useState(null)

  const renderItem = ({ item }) => (
    <ItemCard
      item={item}
      handlePress={() => {
        console.log('item', item)
        setData({ ...data, reason: item.name })
        setStep(step + 1)
      }}
    />
  )

  const headerComponent = ({ title }) => <HeaderRegister title={title} />

  return (
    <View>
      <FlatList
        data={reasons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={() => headerComponent({ title: '¿Qué lo ha causado?' })}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={false}
      />
    </View>
  )
}

export default ReasonScreen
