import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface PixelProps {
  width: number;
  touched: boolean;
}

function Pixel({width, touched}: PixelProps) {
  const [pixelColor, setPixelColor] = useState(touched ? '#fff' : 'black');
  return (
    <View
      style={{
        width: width,
        borderWidth: 0.25,
        borderColor: '#404040',
        backgroundColor: pixelColor,
      }}
    />
  );
}

interface CreateGridProps {
  gridSize: number;
  gridWidth: number;
  touchedPixels: [] | [number, number][];
}

function createGrid({gridSize, gridWidth, touchedPixels}: CreateGridProps) {
  const rows = [];
  const pixelWidth = gridWidth / gridSize;
  for (let i = 0; i < gridSize; i++) {
    const pixels = [];

    for (let j = 0; j < gridSize; j++) {
      const touched = touchedPixels.some(
        elem => elem[0] === i && elem[1] === j,
      );
      pixels.push(
        <Pixel width={pixelWidth} key={`${i}-${j}`} touched={touched} />,
      );
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
  return rows;
}

const gridWidth = 100; //change this to a relative value not abs

export default function PostPixelArt({route}) {
  const {touchedPixels, gridSize} = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'flex-end',
    },
    postContainer: {
      flexDirection: 'row',
      height: '20%',
      width: '100%',
      borderBottomWidth: 1,
      borderColor: '#323232',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    textContainer: {
      height: gridWidth,
    },
    text: {
      color: 'white',
    },
  });

  const grid = createGrid({gridSize, gridWidth, touchedPixels});
  return (
    <View style={[styles.container]}>
      <View style={styles.postContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>give ur pixel art a name...</Text>
        </View>
        <View
          style={{
            aspectRatio: 1,
            width: gridWidth,
            backgroundColor: 'black',
          }}>
          {grid}
        </View>
      </View>
    </View>
  );
}
