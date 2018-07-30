import React from 'react';
import { StyleSheet, Platform, View } from 'react-native';
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
    marginTop: (Platform.OS === 'ios') ? 20 :24,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
