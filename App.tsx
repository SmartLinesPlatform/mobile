import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/Drawer';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285F4',
  },
});