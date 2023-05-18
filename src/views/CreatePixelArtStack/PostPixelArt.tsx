import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import StaticPixelArt from '../../components/StaticPixelArt';
import {useNavigation} from '@react-navigation/native';

const gridWidth = 100; //change this to a relative value not abs

export default function PostPixelArt({route, navigation}: any) {
  const [postTitle, setPostTitle] = useState('');
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
    input: {
      color: 'white',
      height: 40,
      margin: 12,
      width: 200,
      padding: 10,
    },
  });

  const handleNavigate = () => {
    navigation.navigate('Profile');
    console.log('done');
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.postContainer}>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.input}
            placeholder="give ur pixel art a name..."
            value={postTitle}
            onChangeText={setPostTitle}></TextInput>
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
      <Button title="drafts"></Button>
      <Button title="post" onPress={handleNavigate}></Button>
    </View>
  );
}
