import React from 'react';
import {View} from 'react-native';
import {TouchedPixels} from '../types';

const Pixel = ({width, pixelColour}: {width: number; pixelColour: string}) => {
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
};

export default function StaticPixelArt({
  gridSize,
  gridWidth,
  touchedPixels,
}: {
  gridSize: number;
  gridWidth: number;
  touchedPixels: TouchedPixels;
}) {
  const pixelWidth = gridWidth / gridSize;
  const createPixelGrid = () => {
    const rows = [];
    for (let i = 0; i < gridSize; i++) {
      const pixels = [];
      for (let j = 0; j < gridSize; j++) {
        let pixelColour = touchedPixels[i][j].pixelColour;
        pixels.push(
          <Pixel
            width={pixelWidth}
            pixelColour={pixelColour}
            key={`pixel-${i}-${j}`}
          />,
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
  };
  const grid = createPixelGrid();
  return <>{grid}</>;
}
