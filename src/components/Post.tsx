import {View, Text, StyleSheet, Image} from 'react-native';
import PlaceholderImg from '../data/adventuretime.png';
import {StaticPixelArt} from './StaticPixelArt';
import PixelArt from '../data/images.json';
import {TouchedPixels} from '../types';

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
  },
  normalText: {
    color: 'white',
  },
});

interface PostProps {
  username: string;
  title: string;
  likes: string;
  comments: string;
  touchedPixels: TouchedPixels;
}

export default function Post({
  username,
  title,
  likes,
  comments,
  touchedPixels,
}: PostProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <StaticPixelArt
          gridSize={15}
          gridWidth={160} //might cause problems in the future
          touchedPixels={touchedPixels}
        />
      </View>
      {/* <Image style={styles.imageWrapper} source={PlaceholderImg} /> */}
      <Text style={[styles.boldText]}>{username}</Text>
      <Text style={[styles.normalText, {fontSize: 12, marginBottom: '2%'}]}>
        {title}
      </Text>
      <Text>
        <Text style={[styles.boldText, {fontSize: 12}]}>{likes}</Text>
        <Text style={[styles.normalText, {fontSize: 12}]}> likes</Text>
        <Text style={[styles.boldText, {fontSize: 12}]}> {comments}</Text>
        <Text style={[styles.normalText, {fontSize: 12}]}> comments</Text>
      </Text>
    </View>
  );
}
