import {View, Text} from 'react-native';

export default function PostPixelArt() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
  });

  return (
    <View style={[styles.container]}>
      <Text>Post </Text>
    </View>
  );
}
