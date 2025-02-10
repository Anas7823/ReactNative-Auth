// screens/ProfileScreen.js
import React from 'react';
import {View, Text, StyleSheet, Colors, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.texte}>Bienvenue sur votre profil !</Text>
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  texte: {
    fontSize: 20,
    fontWeight: 'bold',
    color :  "#fff",
  },
});
