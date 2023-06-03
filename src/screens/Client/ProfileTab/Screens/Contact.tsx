import React from 'react'
import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import GlobalStyles from '../../../../styles/GlobalStyles'

const Contact = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>¿Tienes alguna duda?</Text>
      <View>
        <Image
          source={require('../../../../assets/support.png')}
          // @ts-ignore
          style={styles.cardImage}
          resizeMode="contain"
          resizeMethod="resize"
        />
      </View>
      <Text style={styles.subtitle}>Puedes escribirnos a:</Text>
      <Pressable onPress={() => Linking.openURL('mailto:goyobujor@gmail.com')}>
        <Text style={[styles.subtitle, { color: '#2DD0F3' }]}> goyobujor@gmail.com </Text>
      </Pressable>
    </ScrollView>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    // @ts-ignore
    backgroundColor: GlobalStyles.globalBackgroundColor,
    paddingHorizontal: 25,
    paddingTop: 16
  },
  title: {
    color: 'blue',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16
  },
  cardImage: {
    width: 350,
    aspectRatio: 1,
    height: 350,
    borderRadius: 64,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  subtitle: {
    color: '#473261',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24
  },
  text: {
    color: '#473261',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 16,
    marginBottom: 12
  }
})
