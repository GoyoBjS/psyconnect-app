import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useUser from '../../../hooks/useUser'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const HomeScreen = ({ navigation }: any) => {
  const { getUser } = useUser()
  const [user, setUser] = useState('')
  useEffect(() => {
    getUser().then((data) => {
      setUser(data?.name)
    })
  }, [])
  return (
    <View style={{ display: 'flex', flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Buen día, {`${user}`}.</Text>
      </View>
      <View style={styles.cardsContainer}>
        <Pressable
          style={[styles.card, { backgroundColor: '#667EFF' }]}
          onPress={() => navigation.navigate('QuickRegistration')}
        >
          <Image
            source={require('../../../assets/clock.png')}
            style={styles.cardImage}
            resizeMode="contain"
            resizeMethod="resize"
          />
          <View style={{ marginRight: 84 }}>
            <Text style={styles.cardTitle}>Registro rápido</Text>
            <Text style={styles.cardDescription}>
              Este tipo de registros es bueno para cuando tienes poco tiempo o paciencia para
              completar el registro completo.
            </Text>
            <Text style={styles.cardDescription}>
              Se recomienda actualizarlo más tarde para que la sesión sea más fructífera.
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.card, { backgroundColor: '#FF6BD6' }]}
          onPress={() => navigation.navigate('AdvancedRegistration')}
        >
          <Image
            source={require('../../../assets/chakra.png')}
            style={styles.cardImage2}
            resizeMode="contain"
            resizeMethod="resize"
          />
          <View style={{ marginLeft: 84 }}>
            <Text style={styles.cardTitle}>Registro avanzado</Text>
            <Text style={styles.cardDescription}>
              Este tipo de registros es bueno para cuando necesitas desahogarte y expresar lo que
              sientes.
            </Text>
            <Text style={styles.cardDescription}>
              También puedes usarlo para cuando el conflicto se ha resuelto y tienes tiempo para
              expresar todo lo sentido y ocurrido.
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 20
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3253FF'
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  card: {
    paddingHorizontal: 18,
    paddingVertical: 24,
    width: WIDTH * 0.95,
    height: HEIGHT * 0.35,
    margin: 12,
    borderRadius: 20,
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
    width: 200,
    height: 200,
    position: 'absolute',
    bottom: 24,
    right: 16,
    opacity: 0.1
  },
  cardImage2: {
    width: 154,
    height: 200,
    position: 'absolute',
    bottom: 24,
    left: 16,
    opacity: 0.1
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16
  },
  cardDescription: {
    fontSize: 19,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10
  }
})
