import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function DrawingPanel() {
  const styles = StyleSheet.create({
    container: {
      height: '30%',
      backgroundColor: 'powderblue',
    },
  });
  return (
    <View
      style={{
        height: '50%',
        backgroundColor: 'powderblue',
      }}
    />
  );
}
