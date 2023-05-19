import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import PixelBg from '../../data/pixelbg.png';
import ProfilePic from '../../data/profilepic.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import UserData from '../../data/userData.json';
import StaticPixelArt from '../../components/StaticPixelArt';
import {ProfileStackProps} from './ProfileStackNav';
import {usePostContext} from '../../contexts/PostContext';

export default function ProfileScreen({route}: ProfileStackProps) {
  const {touchedPixels, newArtGridSize, postTitle} = route.params;
  const {usersPixelArt, setUsersPixelArt} = usePostContext();

  const profilePicWidth = 80; //change these from abs values
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    postContainer: {
      borderTopWidth: 1,
      borderColor: '#323232',
      height: '50%',
      width: '100%',
      display: 'flex',
    },
    infoContainer: {
      borderTopWidth: 1,
      borderColor: '#323232',
      height: '25%',
      width: '100%',
      paddingLeft: '7%',
    },
    iconContainer: {
      borderColor: '#323232',
      height: '5%',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    bannerContainer: {
      height: '20%',
      width: '100%',
    },
    profilePicture: {
      width: profilePicWidth,
      height: profilePicWidth,
      borderRadius: profilePicWidth / 2,
      marginTop: -profilePicWidth / 2,
      borderWidth: 2,
    },
    normalText: {
      color: 'white',
    },
    greyText: {
      color: '#787878',
    },
    boldText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  const gridWidth = Dimensions.get('window').width / 3; //change this to a relative value not abs
  const gridSize = 15;

  useEffect(() => {
    if (postTitle) {
      const formatNewArt = {
        id: Math.random().toString(32).slice(2),
        username: 'ghost',
        title: postTitle,
        likes: '0',
        comments: '0',
        touchedPixels: touchedPixels,
      };
      const newUsersArt = [...usersPixelArt];
      console.log(newUsersArt);
      newUsersArt.push(formatNewArt);
      setUsersPixelArt(newUsersArt);
    }
  }, [touchedPixels, newArtGridSize, postTitle]);

  const UsersData = UserData.filter(item => {
    return item.username === 'ghost';
  })[0];

  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>profile</Text>
      <Image style={styles.bannerContainer} source={PixelBg} />
      <View style={styles.infoContainer}>
        <Image style={styles.profilePicture} source={ProfilePic} />
        <Text
          style={[
            styles.boldText,
            {fontSize: 20, marginBottom: '0.5%', marginTop: '2%'},
          ]}>
          {UsersData.username}
        </Text>
        <Text style={styles.greyText}>{UsersData.pronouns}</Text>
        <Text style={[styles.normalText]}>{UsersData.bio}</Text>
        <Text>
          <Text style={[styles.boldText, {fontSize: 12}]}>
            {UsersData.following}
          </Text>
          <Text style={[styles.normalText, {fontSize: 12}]}> following</Text>
          <Text style={[styles.boldText, {fontSize: 12}]}>
            {' '}
            {UsersData.followers}
          </Text>
          <Text style={[styles.normalText, {fontSize: 12}]}> followers</Text>
          <Text style={[styles.boldText, {fontSize: 12}]}> 12</Text>
          <Text style={[styles.normalText, {fontSize: 12}]}> posts</Text>
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="grid"
          style={{color: 'white', fontSize: 30}}
        />
        <FontAwesome name="folder-o" style={{color: 'white', fontSize: 30}} />
      </View>
      <View style={styles.postContainer}>
        <FlatList
          data={usersPixelArt}
          numColumns={3}
          renderItem={({item}) => (
            <View style={{width: gridWidth, height: gridWidth}}>
              <StaticPixelArt
                gridSize={gridSize}
                gridWidth={gridWidth}
                touchedPixels={item.touchedPixels}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}
