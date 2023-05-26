import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {PostStackProps} from './ProfileStackNav';
import StaticPixelArt from '../../components/StaticPixelArt';

export default function ProfilePost({route}: PostStackProps) {
  const gridWidth = Dimensions.get('window').width;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      justifyContent: 'flex-start',
    },
  });
  const {touchedPixels, gridSize} = route.params;
  return (
    <View style={styles.container}>
      <View style={{width: gridWidth, height: gridWidth}}>
        <StaticPixelArt
          gridSize={gridSize}
          gridWidth={gridWidth}
          touchedPixels={touchedPixels}
        />
      </View>
    </View>
  );
}
