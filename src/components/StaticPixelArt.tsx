import React from 'react';
import {View} from 'react-native';
import {TouchedPixels} from '../types';

function Pixel({
  width,
  touched,
  index,
  touchedPixels,
}: {
  width: number;
  touched: boolean;
  touchedPixels: TouchedPixels;
}) {
  let pixelColour = 'black';
  let touchedPixelIndex = touchedPixels.findIndex(
    item => item.pixelIndex[0] === index[0] && item.pixelIndex[1] === index[1],
  );
  if (touchedPixelIndex !== -1) {
    pixelColour = touchedPixels[touchedPixelIndex].colour;
  }

  return (
    <View
      style={{
        width: width,
        height: width,
        borderWidth: 0.25,
        borderColor: '#404040',
        backgroundColor: pixelColour,
      }}
    />
  );
}

interface CreateGridProps {
  gridSize: number;
  gridWidth: number;
  touchedPixels: [] | [number, number][];
}

export function StaticPixelArt({
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
        <Pixel
          width={pixelWidth}
          key={`${i}-${j}`}
          touched={touched}
          index={[i, j]}
          touchedPixels={touchedPixels}
        />,
      );
    }

    rows.push(
      <View
        key={`row-${i}`}
        style={{
          flex: 1,
          flexDirection: 'row',
          height: pixelWidth,
          width: pixelWidth,
        }}>
        {pixels}
      </View>,
    );
  }
  return <>{rows}</>;
}
