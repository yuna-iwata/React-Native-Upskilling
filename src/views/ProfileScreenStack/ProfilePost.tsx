import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {PostStackProps} from './ProfileStackNav';
import StaticPixelArt from '../../components/StaticPixelArt';
import ProfilePic from '../../data/profilepic.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ProfilePost({route}: PostStackProps) {
  const gridWidth = Dimensions.get('window').width;
  const profilePicWidth = gridWidth / 11;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'flex-start',
    },
    userInfoBox: {
      height: '8%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    text: {
      color: 'white',
    },
    boldText: {
      color: 'white',
      fontWeight: 'bold',
    },
    profilePicture: {
      height: profilePicWidth,
      width: profilePicWidth,
      borderRadius: profilePicWidth / 2,
      marginLeft: '2%',
      marginRight: '5%',
    },
    iconBox: {
      height: '6%',
      marginLeft: '2%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      columnGap: profilePicWidth / 2,
    },
    postInfoBox: {
      marginLeft: '2%',
    },
  });
  const {touchedPixels, gridSize, title, likes, comments} = route.params;
  const [likeSelected, setLikeSelected] = useState(false);

  const likeHandler = () => {
    setLikeSelected(!likeSelected);
  };
  return (
    <View style={styles.container}>
      <View style={styles.userInfoBox}>
        <Image style={styles.profilePicture} source={ProfilePic} />
        <Text style={styles.boldText}>ghost</Text>
      </View>
      <View style={{width: gridWidth, height: gridWidth}}>
        <StaticPixelArt
          gridSize={gridSize}
          gridWidth={gridWidth}
          touchedPixels={touchedPixels}
        />
      </View>
      <View style={styles.iconBox}>
        <TouchableOpacity onPress={() => likeHandler()}>
          <FontAwesome
            name={likeSelected ? 'heart' : 'heart-o'}
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="comment-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.postInfoBox}>
        <Text
          style={
            styles.boldText
          }>{`${likes} likes   ${comments} comments`}</Text>
        <Text style={styles.boldText}>{title}</Text>
      </View>
    </View>
  );
}
