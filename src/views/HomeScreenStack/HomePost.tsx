import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PostStackProps} from './HomeStackNav';
import ViewPost from '../../components/ViewPost';

export default function HomePost({route}: PostStackProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'flex-start',
    },
  });
  const {touchedPixels, gridSize, title, likes, comments} = route.params;
  return (
    <View style={styles.container}>
      <ViewPost
        gridSize={gridSize}
        touchedPixels={touchedPixels}
        title={title}
        likes={likes}
        comments={comments}
      />
    </View>
  );
}
