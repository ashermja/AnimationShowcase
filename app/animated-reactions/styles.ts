import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  screen: {
    backgroundColor: '#666666',
    height: 330,
    width: '100%' // TODO: use flex box modal
  },
  reactionButton: {
    margin: 10
  }
});
