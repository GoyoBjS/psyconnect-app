import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View
} from 'react-native'
import React, { useEffect, useState } from 'react'
import getFullDescriptionOfDate from '../../../utils/getFullDescriptionOfDate'
import { feelings } from '../../../components/feelings'
import { getAuth } from 'firebase/auth'
import getDateFromTimstamp from '../../../utils/getDateFromTimestamp'
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import useUser from '../../../hooks/useUser'

const WIDTH = Dimensions.get('window').width

interface RegisterData {
  id: string
  userId: string
  feeling: string
  reason: string
  date: string
  time: string
  timestamp: number
  solution: string
}

const HistoryScreen = ({ navigation }: any) => {
  const auth = getAuth()
  const { getUser } = useUser()
  const [selectedFeeling, setSelectedFeeling] = useState<string>('')
  const [data, setData] = useState<RegisterData[]>([])

  const getHistoryQuery = (id: string) => {
    return query(collection(db, 'history'), where('userId', '==', id), orderBy('timestamp', 'desc'))
  }

  async function getData() {
    const user = auth.currentUser || (await getUser())
    const id = user?.uid
    const historyQuery = getHistoryQuery(id)
    const querySnapshot = await getDocs(historyQuery)
    const historyDataWithId = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id } as RegisterData
    })

    setData(historyDataWithId)
  }

  useEffect(() => {
    return navigation.addListener('focus', async () => {
      await getData()
    })
  }, [navigation])

  const sortedData = data.sort((a, b) => b.timestamp - a.timestamp)

  const newData: any[] = Object.values(
    sortedData.reduce((agrupator: any, item: RegisterData) => {
      if (!agrupator[item.date]) {
        agrupator[item.date] = {
          date: getFullDescriptionOfDate(getDateFromTimstamp(item.timestamp)),
          data: []
        }
      }
      agrupator[item.date].data.push(item)
      return agrupator
    }, {})
  )

  const renderItem = ({ item }: any) => {
    const feeling = feelings.find((feeling) => feeling.name === item.feeling)

    return (
      <Pressable
        style={[styles.card, { backgroundColor: feeling?.color }]}
        onPress={() => handlePress(item)}
      >
        <Image
          source={feeling ? feeling.image : feelings[0].image}
          style={styles.cardImage}
          resizeMode="contain"
          resizeMethod="resize"
        />
        <View style={styles.cardMain}>
          <Text style={styles.cardTitle}>{item.feeling}</Text>
          <Text style={styles.cardReason}>{item.reason}</Text>
        </View>
        <View style={styles.cardExtra}>
          <Text style={styles.cardTime}>{item.time}</Text>
          <View style={styles.cardSolution}>
            <Text style={styles.textSolution}>Resuelto</Text>
            <Text style={styles.textSolution}>{item.solution}</Text>
          </View>
        </View>
      </Pressable>
    )
  }

  const renderSectionHeader = ({ section: { date } }: any) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{date}</Text>
      </View>
    )
  }

  const handlePress = (item: RegisterData) => {
    navigation.push('EditRegisterScreen', { item })
  }

  const handleFeelingPress = (feeling: string) => {
    if (selectedFeeling === feeling) {
      setSelectedFeeling('')
      // getAllProducts();
    } else {
      setSelectedFeeling(feeling)
      // search in the database for the products that match the Feeling
    }
  }

  return (
    <View style={styles.main}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Registros</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.feelingsContainer}
      >
        {feelings.map((feeling) => (
          <Pressable
            style={[
              styles.feelingContainer,
              selectedFeeling === feeling.name && styles.selectedFeelingContainer
            ]}
            key={feeling.id}
            onPress={() => handleFeelingPress(feeling.name)}
          >
            <Text
              style={[
                styles.feelingText,
                selectedFeeling === feeling.name && styles.selectedFeelingText
              ]}
            >
              {feeling.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
      <SectionList
        sections={newData}
        keyExtractor={(item, index) => item + index}
        renderItem={(item) => renderItem(item)}
        renderSectionHeader={(item) => renderSectionHeader(item)}
      />
    </View>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: 12,
    marginBottom: 0
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 20
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3253FF'
  },
  sectionHeader: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  sectionHeaderText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3253FF'
  },
  feelingsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    marginLeft: 20
  },
  feelingContainer: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    marginRight: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedFeelingContainer: {
    backgroundColor: '#3253FF'
  },
  feelingText: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    height: 26
  },
  selectedFeelingText: {
    color: 'white'
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: WIDTH * 0.95,
    height: 100,
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 16,
    backgroundColor: '#667EFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cardImage: {
    width: 72,
    height: 72,
    marginRight: 20
  },
  cardMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8
  },
  cardReason: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF'
  },
  cardExtra: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1
  },
  cardTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  cardSolution: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  textSolution: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF'
  }
})
