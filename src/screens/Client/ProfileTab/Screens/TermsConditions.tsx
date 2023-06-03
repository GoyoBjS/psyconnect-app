import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import GlobalStyles from '../../../../styles/GlobalStyles'

const TermsAndConditions = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>
          De vez en cuando aclaramos nuestros términos para que sean más fáciles de entender. Hoy (1
          de septiembre de 2021) estamos actualizando nuestros términos para garantizar que nuestro
          lenguaje es claro, pero no estamos realizando ningún cambio significativo en el contenido
          de los términos relacionados con esta actualización. También hemos trasladado las
          Directrices de usuario a una página independiente que se puede encontrar aquí.
        </Text>
        <Text style={styles.title}>Términos y Condiciones de uso de PsyConnect.</Text>
        <Text style={styles.colorText}>1. Introducción</Text>
        <Text style={styles.colorText}>2. El Servicio de PsyConnect que proporcionamos</Text>
        <Text style={styles.colorText}>3. Uso del Servicio de PsyConnect</Text>
        <Text style={styles.colorText}>4. Contenido y derechos de propiedad intelectual</Text>
        <Text style={styles.colorText}>
          5. Asistencia al cliente, información, preguntas y reclamaciones
        </Text>
        <Text style={styles.colorText}>6. Problemas y controversias</Text>
        <Text style={styles.colorText}>7. Acerca de los presentes Términos y Condiciones</Text>
        <Text style={styles.title}>1. Introducción</Text>
        <Text style={styles.text}>
          Lea detenidamente los presentes Términos y Condiciones de uso (en lo sucesivo, los
          términos) que rigen el uso que usted haga de los servicios personalizados de PsyConnect
          (que incluyen el acceso a los mismos) para la transmisión de música y otros contenidos,
          incluidos todos nuestros sitios web y aplicaciones de software que incorporan o enlazan
          con los presentes Términos (conjuntamente, el servicio de PsyConnect) y cualquier música,
          vídeo, podcast u otro material que se ponga a disposición a través del Servicio de
          PsyConnect (en lo sucesivo, el contenido).
        </Text>
        <Text style={styles.text}>
          El uso del Servicio de PsyConnect podrá estar sujeto a términos y condiciones adicionales
          que establezca PsyConnect, los cuales se incorporan a los presentes Términos mediante la
          presente referencia.
        </Text>
        <Text style={styles.text}>
          Al suscribirse al Servicio de PsyConnect, o al utilizarlo de cualquier otro modo, usted
          acepta los presentes Términos. Si no acepta los presentes Términos, no deberá utilizar el
          Servicio de PsyConnect ni acceder a ningún Contenido.
        </Text>
        <Text style={styles.text}>
          Los presentes Términos se establecen entre usted y PsyConnect.
        </Text>
        <Text style={styles.text}>
          Lorem Ipsum collects information about you when you use our Website to access our
          services, and other online products and services (collectively, the “Services”) and
          through other interactions and communications you have with us. The term Services
          includes, collectively, various applications, websites, widgets, email notifications and
          other mediums, or portions of such mediums, through which you have accessed this Privacy
          Policy.
        </Text>
        <Text style={styles.text}>
          Lorem Ipsum collects information about you when you use our Website to access our
          services, and other online products and services (collectively, the “Services”) and
          through other interactions and communications you have with us. The term Services
          includes, collectively, various applications, websites, widgets, email notifications and
          other mediums, or portions of such mediums, through which you have accessed this Privacy
          Policy. sadkjadsoiasjdoiasjdoiasjdoiasjdoiasjdoiasjdoisa
        </Text>
      </View>
    </ScrollView>
  )
}

export default TermsAndConditions

const styles = StyleSheet.create({
  container: {
    //   @ts-ignore
    backgroundColor: GlobalStyles.globalBackgroundColor,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8
  },
  subContainer: {
    paddingTop: 12,
    paddingBottom: 90
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 8,
    lineHeight: 20
  },
  colorText: {
    color: '#00D1FF',
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 8,
    lineHeight: 20
  }
})
