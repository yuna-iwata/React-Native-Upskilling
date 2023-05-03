import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  imageWrapper: {
    width: '100%',
    height: '70%',
    backgroundColor: 'red',
    marginBottom: '10%',
  },
  boldText: {
    color: 'white',
    fontWeight: 'bold',
  },
  normalText: {
    color: 'white',
  },
});

export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}></View>
      <Text style={styles.boldText}>username</Text>
      <Text style={styles.normalText}>title</Text>
    </View>
  );
}
