import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const circleDiameter = 60;

export const startPosition = width;
export const endPosition = -(startPosition + circleDiameter);

export default StyleSheet.create({
  container:{
    flex: 1
  },
  circle: {
    height: circleDiameter,
    width: circleDiameter
  },
  circleImage: {
    height: circleDiameter,
    width: circleDiameter
  },
  animatedCircle: {
    position: 'absolute',
    left: width,
    top: 100
  }
});
