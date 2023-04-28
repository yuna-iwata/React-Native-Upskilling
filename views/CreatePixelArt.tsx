import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import DrawingPanel from '../components/DrawingPanel';

export default function CreatePixelArt() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const [color, setColor] = useState('#ffffff');
  return (
    <View style={[styles.container]}>
      <DrawingPanel></DrawingPanel>
    </View>
  );
}
