import React, { Component } from 'react';
import { View, Easing, Animated, Image } from 'react-native';
import styles, { endPosition } from './styles';

interface IAnimatedCircleProps {
  animationComplete: Function,
  reactionNo: number,
  minPositionY?: number,
  maxPositionY?: number,
  initialScale?: number,
  minScale?: number,
  maxScale?: number,
  durationMs?: number,
  loopSpeedMs?: number
};

interface IAnimatedCircleState {
  initialScale: Animated.Value,
  position: { x: Animated.Value, y: Animated.Value},
  imageNo: number
};

export default class AnimatedCircle extends Component<IAnimatedCircleProps, IAnimatedCircleState> {

  constructor(props: IAnimatedCircleProps) {

    super(props);
    this.state = {
      initialScale: new Animated.Value(1),
      position: {
        x: new Animated.Value(0),
        y: new Animated.Value(0)
      },
      imageNo: 0
    }
  }
  
  static defaultProps = {
    reactionNo: 0,
    minPositionY: 0,
    maxPositionY: 40,
    durationMs: 5000,
    initialScale: 1,
    minScale: 0.9,
    maxScale: 1.2,
    loopSpeedMs: 1000
  }

  readonly images = [
    require('../../images/laugh.png'),
    require('../../images/like.png'),
    require('../../images/love.png'),
    require('../../images/angry.png'),
    require('../../images/sad.png'),
    require('../../images/surprise.png')
  ];


  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public componentDidMount() {
    const { reactionNo, minPositionY: wobbleHeightMin, maxPositionY: wobbleHeightMax,
      durationMs, minScale, maxScale, loopSpeedMs } = this.props;
    const loopActionMs = loopSpeedMs! / 2;
    const randomWobbleHeight = this.randomIntFromInterval(wobbleHeightMin!, wobbleHeightMax!);
    this.setState({imageNo: this.randomIntFromInterval(0, this.images.length-1) });
    Animated.parallel([
      Animated.timing(
        this.state.position.x,
        {
          toValue: endPosition,
          duration: durationMs,
          useNativeDriver: true
        }
      ),
      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(this.state.position.y, {
              toValue: randomWobbleHeight,
              duration: loopActionMs,
              useNativeDriver: true,
              easing: Easing.inOut(Easing.quad)
            }),
            Animated.timing(this.state.position.y, {
              toValue: 0,
              duration: loopActionMs,
              useNativeDriver: true,
              easing: Easing.inOut(Easing.quad)
            })
          ]),
          Animated.sequence([
            Animated.timing(
              this.state.initialScale,
              {
                toValue: maxScale!,
                duration: loopActionMs!,
                useNativeDriver: true
              }
            ),
            Animated.timing(
              this.state.initialScale,
              {
                toValue: minScale!,
                duration: loopActionMs!,
                useNativeDriver: true
              }
            )
          ])
        ]),
        {
          iterations: Math.ceil(durationMs! / loopSpeedMs!)
        }
      )
    ]).start((() => {
      this.props.animationComplete(reactionNo)
    }))
  }

  private renderCircle() {
    return (
      <View style={styles.circle}>
        <Image style={styles.circleImage} source={this.images[this.state.imageNo]}/>
      </View>);
  }

  public render () {
    const { position, initialScale } = this.state
    const animationStyle = {
      transform: [
        { translateX: position.x },
        { translateY: position.y },
        { scaleX : initialScale },
        { scaleY : initialScale },
      ]
    }

    return (
      <Animated.View style={[styles.animatedCircle, animationStyle]}>
       {this.renderCircle()}
      </Animated.View>
    )
  }
}
