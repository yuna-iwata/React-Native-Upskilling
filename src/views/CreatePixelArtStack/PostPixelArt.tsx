import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import StaticPixelArt from '../../components/StaticPixelArt';
import {PostPixelArtProps} from './CreatePixelArtStackNav';
import {generateEmptyGrid} from './CreatePixelArt';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const gridWidth = 100; //change this to a relative value not abs

export default function PostPixelArt({route, navigation}: PostPixelArtProps) {
  const [postTitle, setPostTitle] = useState('');
  const {touchedPixels, gridSize, setTouchedPixels} = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
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
    tagsContainer: {
      height: '10%',
      borderBottomWidth: 1,
      borderColor: '#323232',
    },
    placeholderContainer: {
      height: '57%',
    },
    text: {
      color: 'white',
    },
    boldText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
    },
    input: {
      color: 'white',
      height: 40,
      margin: 12,
      width: 200,
      padding: 10,
    },
    buttonContainer: {
      height: '13%',
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '10%',
      marginRight: '10%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      height: '40%',
      width: '47%',
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const handleNavigate = () => {
    navigation.navigate('Create');
    const emptyGrid = generateEmptyGrid(gridSize);
    setTouchedPixels(emptyGrid);
    console.log(gridSize);
    navigation.navigate('ProfileStack', {
      screen: 'Profile',
      params: {
        touchedPixels: touchedPixels,
        newArtGridSize: gridSize,
        postTitle: postTitle,
      },
    });
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.postContainer}>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.input}
            placeholder="give ur pixel art a name..."
            value={postTitle}
            onChangeText={setPostTitle}
          />
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
      <View style={styles.tagsContainer}>
        <Text>tags</Text>
      </View>
      <View style={styles.placeholderContainer}></View>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, {backgroundColor: '#1a1a1a'}]}>
          <Text style={[styles.text, {marginRight: '5%'}]}>drafts</Text>
          <FontAwesome name="folder-o" style={{color: 'white', fontSize: 18}} />
        </Pressable>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#FC97BB'}]}
          onPress={handleNavigate}>
          <Text style={[styles.text, {color: '#2D1F81', marginRight: '7%'}]}>
            post
          </Text>
          <FontAwesome name="send" style={{color: '#2D1F81', fontSize: 13}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
