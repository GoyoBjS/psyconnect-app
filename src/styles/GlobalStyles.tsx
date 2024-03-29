import { Platform, StatusBar, StyleSheet } from 'react-native'

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  // @ts-ignore
  globalBackgroundColor: '#FDF9FF',
  input: {
    flex: 1,
    paddingVertical: 19,
    paddingHorizontal: 12,
    color: '#333',
    backgroundColor: 'transparent',
    borderColor: '#3253FF',
    borderWidth: 1.5,
    borderRadius: 10,
    textAlignVertical: 'center',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  textareaInput: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 12,
    color: '#473261',
    backgroundColor: 'transparent',
    borderColor: '#7D26E9',
    borderWidth: 1.5,
    borderRadius: 10,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    marginBottom: 16
  },
  title: {
    color: '#473261',
    fontSize: 36,
    fontWeight: 'bold',
    paddingBottom: 16
  },
  //  @ts-ignore
  submitButtonGlobal: ({ pressed }: any) => ({
    backgroundColor: pressed ? '#4a67ff' : '#3253FF',
    borderRadius: pressed ? 16 : 10,
    paddingVertical: 19,
    textAlign: 'center'
  }),
  submitText: {
    color: '#FFF',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
