import {View, Text, StyleSheet} from 'react-native';
import {createGrid} from '../../components/DrawingPanel';

function Pixel({width, touched, index, setTouchedPixels}) {
  return (
    <View
      style={{
        width: width,
        borderWidth: 0.25,
        borderColor: '#404040',
        backgroundColor: 'white',
      }}
    />
  );
}

export default function PostPixelArt({route}) {
  const {postData} = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
  });

  const grid = createGrid(15, 100, postData, null);
  return (
    <View style={[styles.container]}>
      <Text style={{color: 'white'}}>Post </Text>
      <Text style={{color: 'white'}}> {JSON.stringify(postData)}</Text>
      <View
        style={{
          aspectRatio: 1,
          width: '100%',
          borderWidth: 2,
          borderColor: '#222222',
          backgroundColor: 'black',
        }}>
        {grid}
      </View>
    </View>
  );
}
