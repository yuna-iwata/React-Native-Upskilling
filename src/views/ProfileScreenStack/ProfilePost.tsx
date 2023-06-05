import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PostStackProps} from './ProfileStackNav';
import ViewPost from '../../components/ViewPost';

export default function ProfilePost({route}: PostStackProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'flex-start',
    },
  });
  const {touchedPixels, gridSize, username, title, likes, comments} =
    route.params;
  return (
    <View style={styles.container}>
      <ViewPost
        gridSize={gridSize}
        touchedPixels={touchedPixels}
        username={username}
        title={title}
        likes={likes}
        comments={comments}
      />
    </View>
  );
}
