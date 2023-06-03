import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import GlobalStyles from '../../../../styles/GlobalStyles'

const Privacy = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Introducción.</Text>
        <Text style={styles.text}>
          We at PsyConnect respect the privacy of your personal information and, as such, make every
          effort to ensure your information is protected and remains private. As the owner and
          operator of loremipsum.io (the "Website") hereafter referred to in this Privacy Policy as
          "Lorem Ipsum", "us", "our" or "we", we have provided this Privacy Policy to explain how we
          collect, use, share and protect information about the users of our Website (hereafter
          referred to as “user”, “you” or "your"). For the purposes of this Agreement, any use of
          the terms "Lorem Ipsum", "us", "our" or "we" includes PsyConnect, without limitation. We
          will not use or share your personal information with anyone except as described in this
          Privacy Policy.
        </Text>
        <Text style={styles.text}>
          This Privacy Policy will inform you about the types of personal data we collect, the
          purposes for which we use the data, the ways in which the data is handled and your rights
          with regard to your personal data. Furthermore, this Privacy Policy is intended to satisfy
          the obligation of transparency under the EU General Data Protection Regulation 2016/679
          ("GDPR") and the laws implementing GDPR.
        </Text>
        <Text style={styles.text}>
          For the purpose of this Privacy Policy the Data Controller of personal data is PsyConnect
          and our contact details are set out in the Contact section at the end of this Privacy
          Policy. Data Controller means the natural or legal person who (either alone or jointly or
          in common with other persons) determines the purposes for which and the manner in which
          any personal information are, or are to be, processed.
        </Text>
        <Text style={styles.text}>
          For purposes of this Privacy Policy, "Your Information" or "Personal Data" means
          information about you, which may be of a confidential or sensitive nature and may include
          personally identifiable information ("PII") and/or financial information. PII means
          individually identifiable information that would allow us to determine the actual identity
          of a specific living person, while sensitive data may include information, comments,
          content and other information that you voluntarily provide.
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
          Policy.
        </Text>
      </View>
    </ScrollView>
  )
}

export default Privacy

const styles = StyleSheet.create({
  container: {
    //   @ts-ignore
    backgroundColor: GlobalStyles.globalBackgroundColor,
    paddingHorizontal: 16,
    paddingTop: 16
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
  }
})
