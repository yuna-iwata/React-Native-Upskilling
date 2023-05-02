export default ProfileScreen;
import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import DrawingPanel from '../../components/DrawingPanel';

export default function ProfileScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={[styles.container]}>
      <Text style={{color: 'white'}}>profile</Text>
    </View>
  );
}
