import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import StaticPixelArt from '../../components/StaticPixelArt';

const gridWidth = 100; //change this to a relative value not abs

export default function PostPixelArt({route}: any) {
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
          <StaticPixelArt
            gridSize={gridSize}
            gridWidth={gridWidth}
            touchedPixels={touchedPixels}
          />
        </View>
      </View>
    </View>
  );
}
