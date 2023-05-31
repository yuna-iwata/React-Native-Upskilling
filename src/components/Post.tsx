import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TouchedPixels} from '../types';
import StaticPixelArt from './StaticPixelArt';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 250,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: '5%',
  },
  boldText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  normalText: {
    color: 'white',
    fontSize: 10,
  },
  iconContainer: {
    height: '13%',
    display: 'flex',
    flexDirection: 'row',
    columnGap: 10, //change from hardcoded
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

interface PostProps {
  username: string;
  title: string;
  likes: string;
  comments: string;
  gridSize: number;
  touchedPixels: TouchedPixels;
}

export default function Post({
  username,
  title,
  likes,
  comments,
  touchedPixels,
  gridSize,
}: PostProps) {
  const [likeSelected, setLikeSelected] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <StaticPixelArt
          gridSize={gridSize}
          gridWidth={160} //might cause problems in the future
          touchedPixels={touchedPixels}
        />
      </View>
      <Text style={[styles.boldText, {fontSize: 14}]}>{username}</Text>
      <Text style={[styles.normalText, {marginBottom: '2%'}]}>{title}</Text>
      <Text>
        <Text style={styles.boldText}>{likes}</Text>
        <Text style={styles.normalText}> likes</Text>
        <Text style={styles.boldText}> {comments}</Text>
        <Text style={styles.normalText}> comments</Text>
      </Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setLikeSelected(!likeSelected)}>
          <FontAwesome
            name={likeSelected ? 'heart' : 'heart-o'}
            style={{color: 'white', fontSize: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="comment-outline"
            style={{color: 'white', fontSize: 20}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
