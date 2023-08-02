import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
} from 'react-native';
import Post from '../../components/Post';
import {usePostContext} from '../../contexts/PostContext';
import {HomeStackProps} from './HomeStackNav';
import {BleManager} from 'react-native-ble-plx';

const bleManager = new BleManager();

export default function HomeScreen({navigation}: HomeStackProps) {
  const [connectionStatus, setConnectionStatus] = useState('Searching ...');
  const [allDevices, setAllDevices] = useState([]);
  const {usersPixelArt} = usePostContext();
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'black',
    },
    buttonText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  const SI_SYMBOL = ['', 'k', 'm', 'b'];

  function numberFormat(number: number) {
    // what tier? (determines SI symbol)
    var tier = (Math.log10(Math.abs(number)) / 3) | 0;

    // if zero, we don't need a suffix
    if (tier == 0) return number.toString();

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
  }

  const deviceRef = useRef(null);

  const searchAndConnectToDevice = () => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        //console.error(error);
        setConnectionStatus('Error searching for devices');
        return;
      }
      if (device) {
        setConnectionStatus('device found!');
        console.log(device.name);
      }
    });
  };

  const onPressBluetooth = () => {
    searchAndConnectToDevice();
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        data={usersPixelArt}
        numColumns={2}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Post', {
                gridSize: item.gridSize,
                touchedPixels: item.touchedPixels,
                username: item.username,
                title: item.title,
                likes: item.likes,
                comments: item.comments,
              });
            }}>
            <Post
              username={item.username}
              title={item.title}
              gridSize={item.gridSize}
              likes={numberFormat(parseInt(item.likes))}
              comments={numberFormat(parseInt(item.comments))}
              touchedPixels={item.touchedPixels}
            />
          </Pressable>
        )}
      />
      <Text style={{color: 'white'}}>{connectionStatus}</Text>
      <TouchableOpacity style={styles.button} onPress={onPressBluetooth}>
        <Text style={styles.buttonText}>bluetooth</Text>
      </TouchableOpacity>
    </View>
  );
}
