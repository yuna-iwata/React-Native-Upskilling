import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function Pixel() {
  return (
    <View
      style={{
        width: '10%',
        borderWidth: 0.25,
        borderColor: '#404040',
      }}></View>
  );
}

export default function DrawingPanel() {
  const numRows = 10; // Change this value to adjust the number of rows
  const numCols = 10; // Change this value to adjust the number of columns

  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const pixels = [];

    for (let j = 0; j < numCols; j++) {
      pixels.push(<Pixel key={`${i}-${j}`} />);
    }

    rows.push(
      <View
        key={`row-${i}`}
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        {pixels}
      </View>,
    );
  }
  return (
    <View
      style={{
        aspectRatio: 1,
        width: '100%',
        borderWidth: 2,
        borderColor: '#222222',
        backgroundColor: 'black',
      }}>
      {rows}
    </View>
  );
}
