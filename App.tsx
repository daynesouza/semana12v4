import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppRote from './src/rote/AppRote';

export default function App() {

  return (
    <SafeAreaView style={style.body}>
        <AppRote/>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#EBFFEE',
  }
})
