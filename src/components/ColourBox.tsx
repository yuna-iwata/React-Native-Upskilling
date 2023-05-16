import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function ColourBox({colour, setSelectedColour}) {
  const styles = StyleSheet.create({
    container: {
      height: '60%',
      aspectRatio: 1,
      borderRadius: 3,
      backgroundColor: colour,
    },
  });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setSelectedColour(colour);
      }}
    />
  );
}
