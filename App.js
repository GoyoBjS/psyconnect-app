import React from 'react';
// import './config/firebase';
import RootNavigation from './navigation';
import { SafeAreaView, StatusBar } from "react-native";
// import { ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    {/* <ThemeProvider> */}
    <StatusBar
          animated={true}
          backgroundColor={{backgroundColor: '#fff'}}
          barStyle="dark-content"
          hidden={false}
        />
      <RootNavigation />
    {/* </ThemeProvider> */}
    </SafeAreaView>
  );
}