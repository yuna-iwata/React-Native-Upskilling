import {View, Text, StyleSheet} from 'react-native';

export default function PostPixelArt({route}) {
  const {postData} = route.params;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
  });

  return (
    <View style={[styles.container]}>
      <Text style={{color: 'white'}}>Post </Text>
      <Text style={{color: 'white'}}> {JSON.stringify(postData)}</Text>
    </View>
  );
}
