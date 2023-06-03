import React, { useContext } from 'react'
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import GlobalStyles from '../../../styles/GlobalStyles'
import { AuthContext } from '../../../contexts/AuthContext'

const ProfileScreen = () => {
  const { handleSignOut } = useContext(AuthContext)
  const navigation: any = useNavigation()

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const UsuarioIcon = require('../../../assets/icons/UsuarioIcon.png')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ArrowIcon = require('../../../assets/icons/ProfileArrow.png')

  return (
    <ScrollView style={styles.container}>
      <View style={styles.blockContainer}>
        <Text style={styles.title}>Ajustes</Text>
        <Text style={styles.subTitle}>Cuenta</Text>

        <Pressable onPress={() => navigation.navigate('EditProfile')} style={styles.linkContainer}>
          <View style={styles.iconAndTextContainer}>
            <Image
              style={{ width: 20, height: 20, tintColor: '#3253FF' }}
              source={UsuarioIcon}
              resizeMode="contain"
              resizeMethod="resize"
            />
            <Text style={styles.text}>Editar perfil</Text>
          </View>
          <Image
            style={{ width: 20, height: 20, tintColor: '#3253FF' }}
            source={ArrowIcon}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </Pressable>
      </View>
      <View style={styles.blockContainer}>
        <Text style={styles.subTitle}>Ayuda</Text>
        <Pressable onPress={() => navigation.navigate('Contact')} style={styles.linkContainer}>
          <View style={styles.iconAndTextContainer}>
            <Image
              style={{ width: 20, height: 20, tintColor: '#3253FF' }}
              source={require('../../../assets/icons/Contacto.png')}
            />
            <Text style={styles.text}>Contacto</Text>
          </View>
          <Image style={{ width: 20, height: 20, tintColor: '#3253FF' }} source={ArrowIcon} />
        </Pressable>
      </View>
      <View style={styles.blockContainer}>
        <Text style={styles.subTitle}>Información</Text>

        <Pressable onPress={() => navigation.navigate('Privacy')} style={styles.linkContainer}>
          <View style={styles.iconAndTextContainer}>
            <Image
              style={{ width: 20, height: 20, tintColor: '#3253FF' }}
              source={require('../../../assets/icons/Privacidad.png')}
            />
            <Text style={styles.text}>Privacidad</Text>
          </View>
          <Image style={{ width: 20, height: 20, tintColor: '#3253FF' }} source={ArrowIcon} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('TermsAndConditions')}
          style={styles.linkContainer}
        >
          <View style={styles.iconAndTextContainer}>
            <Image
              style={{ width: 20, height: 20, tintColor: '#3253FF' }}
              source={require('../../../assets/icons/Condiciones.png')}
            />
            <Text style={styles.text}>Condiciones de uso</Text>
          </View>
          <Image style={{ width: 20, height: 20, tintColor: '#3253FF' }} source={ArrowIcon} />
        </Pressable>
      </View>

      <Pressable onPress={handleSignOut}>
        <Text style={styles.closeSesion}>Cerrar sesión</Text>
      </Pressable>
      <View style={styles.versionContainer}>
        <Text style={styles.version}>Versión 1.0.0</Text>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    // @ts-ignore
    backgroundColor: GlobalStyles.globalBackgroundColor,
    paddingTop: 16,
    flex: 1,
    display: 'flex'
  },
  blockContainer: {
    paddingRight: 32,
    paddingLeft: 32
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#3253FF',
    paddingBottom: 24
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#3253FF',
    paddingBottom: 24
  },
  linkContainer: {
    flex: 1,
    width: Dimensions.get('window').width - 64,
    paddingBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconAndTextContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#677fff',
    paddingLeft: 16
  },
  closeSesion: {
    color: '#00B4D9',
    fontWeight: 'bold',
    fontSize: 24,
    textShadowColor: '#111',
    paddingLeft: 32
  },
  versionContainer: {
    paddingTop: 24,
    alignSelf: 'center'
  },
  version: {
    color: '#A2A3A4',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center'
  }
})
