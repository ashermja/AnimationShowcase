import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedReactions from './app/animated-reactions';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AnimatedReactions />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
