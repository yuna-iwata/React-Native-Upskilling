import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PixelBg from '../../data/pixelbg.png';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ProfileScreen() {
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
    },
    infoContainer: {
      borderTopWidth: 1,
      borderColor: '#323232',
      height: '25%',
      width: '100%',
      padding: '7%',
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

  return (
    <View style={styles.container}>
      <Text style={styles.normalText}>profile</Text>
      <Image style={styles.bannerContainer} source={PixelBg} />
      <View style={styles.infoContainer}>
        <Text style={[styles.boldText, {fontSize: 20, marginBottom: '0.5%'}]}>
          username
        </Text>
        <Text style={styles.greyText}>pronouns</Text>
        <Text style={[styles.normalText]}>bio</Text>
        <Text>
          <Text style={[styles.boldText, {fontSize: 12}]}>12</Text>
          <Text style={[styles.normalText, {fontSize: 12}]}> following</Text>
          <Text style={[styles.boldText, {fontSize: 12}]}> 12</Text>
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
      <View style={styles.postContainer}></View>
    </View>
  );
}
