import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function ColourBox({colour}) {
  const styles = StyleSheet.create({
    container: {
      height: '70%',
      aspectRatio: 1,
      borderRadius: 3,
      backgroundColor: colour,
    },
  });
  return <View style={styles.container} />;
}
