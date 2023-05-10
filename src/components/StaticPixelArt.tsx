import React, {useState} from 'react';
import {View} from 'react-native';

function Pixel({width, touched}: {width: number; touched: boolean}) {
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

export function createGrid({
  gridSize,
  gridWidth,
  touchedPixels,
}: CreateGridProps) {
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
