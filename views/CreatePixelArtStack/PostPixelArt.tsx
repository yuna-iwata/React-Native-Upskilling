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

const gridWidth = 100; //change this to a relative value not abs

export default function PostPixelArt({route}) {
  const {postData, gridSize} = route.params;
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
  });

  const grid = createGrid(gridSize, gridWidth, postData, null);
  return (
    <View style={[styles.container]}>
      <View style={styles.postContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>give ur pixel art a name...</Text>
        </View>
        <View
          style={{
            aspectRatio: 1,
            width: gridWidth,
            backgroundColor: 'black',
          }}>
          {grid}
        </View>
      </View>
    </View>
  );
}
