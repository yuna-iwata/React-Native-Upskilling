import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import PixelBg from '../../data/pixelbg.png';

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
      height: '30%',
      width: '100%',
    },
    bannerContainer: {
      height: '20%',
      width: '100%',
    },
    text: {
      color: 'white',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>profile</Text>
      <Image style={styles.bannerContainer} source={PixelBg} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>username</Text>
        <Text style={styles.text}>pronouns</Text>
        <Text style={styles.text}>bio</Text>
        <Text style={styles.text}></Text>
      </View>
      <View style={styles.postContainer}></View>
    </View>
  );
}
