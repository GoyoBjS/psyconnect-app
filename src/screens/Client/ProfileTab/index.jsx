import React, { useContext } from 'react'
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import GlobalStyles from '../../../styles/GlobalStyles'
import { AuthContext } from '../../../contexts/AuthContext'

const ProfileScreen = () => {
  const { handleSignOut } = useContext(AuthContext)
  const navigation = useNavigation()

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const UsuarioIcon = require('../../../assets/icons/UsuarioIcon.png')
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ArrowIcon = require('../../../assets/icons/ProfileArrow.png')

  return (
    <ScrollView style={styles.container}>
      <View style={styles.blockContainer}>
        <Text style={styles.subTitle}>Cuenta</Text>

        <Pressable onPress={() => navigation.navigate('EditProfile')} style={styles.linkContainer}>
          <View style={styles.iconAndTextContainer}>
            <Image style={styles.arrowIcon} source={UsuarioIcon} />
            <Text style={styles.text}>Editar perfil</Text>
          </View>
          <Image style={styles.arrowIcon} source={ArrowIcon} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('ChangePassword')}
          style={styles.linkContainer}
        >
          <View style={styles.iconAndTextContainer}>
            <Image style={styles.arrowIcon} source={require('../../../assets/icons/Lock.png')} />
            <Text style={styles.text}>Cambiar contraseña</Text>
          </View>
          <Image style={styles.arrowIcon} source={ArrowIcon} />
        </Pressable>
        <Pressable onPress={() => navigation.push('EditPreferences')} style={styles.linkContainer}>
          <View style={styles.iconAndTextContainer}>
            <Image style={styles.arrowIcon} source={require('../../../assets/icons/Lock.png')} />
            <Text style={styles.text}>Modificar preferencias</Text>
          </View>
          <Image style={styles.arrowIcon} source={ArrowIcon} />
        </Pressable>
      </View>
      <View style={styles.blockContainer}>
        <Text style={styles.subTitle}>Ayuda</Text>

        <Pressable onPress={() => navigation.navigate('Inform')} style={styles.linkContainer}>
          <View style={styles.iconAndTextContainer}>
            <Image
              style={styles.arrowIcon}
              source={require('../../../assets/icons/Informar.png')}
            />
            <Text style={styles.text}>Informar de un problema</Text>
          </View>
          <Image style={styles.arrowIcon} source={ArrowIcon} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Contact')} style={styles.linkContainer}>
          <View style={styles.iconAndTextContainer}>
            <Image
              style={styles.arrowIcon}
              source={require('../../../assets/icons/Contacto.png')}
            />
            <Text style={styles.text}>Contacto</Text>
          </View>
          <Image style={styles.arrowIcon} source={ArrowIcon} />
        </Pressable>
      </View>
      <View style={styles.blockContainer}>
        <Text style={styles.subTitle}>Información</Text>

        <Pressable onPress={() => navigation.navigate('Privacy')} style={styles.linkContainer}>
          <View style={styles.iconAndTextContainer}>
            <Image
              style={styles.arrowIcon}
              source={require('../../../assets/icons/Privacidad.png')}
            />
            <Text style={styles.text}>Privacidad</Text>
          </View>
          <Image style={styles.arrowIcon} source={ArrowIcon} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('TermsAndConditions')}
          style={styles.linkContainer}
        >
          <View style={styles.iconAndTextContainer}>
            <Image
              style={styles.arrowIcon}
              source={require('../../../assets/icons/Condiciones.png')}
            />
            <Text style={styles.text}>Condiciones de uso</Text>
          </View>
          <Image style={styles.arrowIcon} source={ArrowIcon} />
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
    backgroundColor: GlobalStyles.globalBackgroundColor,
    paddingTop: 16
  },
  blockContainer: {
    paddingRight: 32,
    paddingLeft: 32
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24,
    color: '#473261',
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
    fontSize: 18,
    lineHeight: 22,
    color: '#833AB4',
    paddingLeft: 16
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: '#473261'
  },
  closeSesion: {
    color: '#00B4D9',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
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
    lineHeight: 15
  }
})
