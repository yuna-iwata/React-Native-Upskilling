import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Post from '../../components/Post';
import feedData from '../../data/feed.json';

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
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
  return (
    <View style={[styles.container]}>
      <Text style={{color: 'white'}}>home</Text>
      <FlatList
        data={feedData}
        numColumns={2}
        renderItem={({item}) => (
          <Post
            username={item.username}
            title={item.title}
            likes={numberFormat(parseInt(item.likes))}
            comments={numberFormat(parseInt(item.comments))}
          />
        )}
      />
    </View>
  );
}
