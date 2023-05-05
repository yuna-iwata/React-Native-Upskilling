import {View, Text, StyleSheet, Image} from 'react-native';
import PlaceholderImg from '../data/adventuretime.png';

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 300,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  imageWrapper: {
    width: '100%',
    height: '70%',
    backgroundColor: 'red',
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
}

export default function Post({username, title, likes, comments}: PostProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageWrapper} source={PlaceholderImg} />
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
