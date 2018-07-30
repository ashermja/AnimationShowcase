import React from 'react'
import { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements'
import styles from './styles';
import AnimatedReaction from '../components/animated-reaction';


export default class AnimationReactions 
  extends Component <{}, { reactionCounter: number, reactionArray: Array<any> }> {
  
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { reactionCounter: 0, reactionArray: [] };
    this.animateReaction = this.animateReaction.bind(this);
    this.animationComplete = this.animationComplete.bind(this);
  }

  animateReaction() {
    let reactionCounter = this.state.reactionCounter;
    this.setState(prevState => ({
      reactionArray: [...prevState.reactionArray, reactionCounter],
      reactionCounter: reactionCounter + 1
    }))
  }

  animationComplete(reactionNo: number) {
    const updateReactionArray = this.state.reactionArray.filter(r => r !== reactionNo);
    this.setState({
      reactionArray: updateReactionArray
    });
  }

  renderReactions() {
    return this.state.reactionArray.map(reactionNo =>
      <AnimatedReaction 
        key={reactionNo}
        animationComplete={this.animationComplete}
        reactionNo={reactionNo}
        minPositionY={0}
        maxPositionY={40}
        durationMs={5000}
        initialScale={1}
        minScale={0.9}
        maxScale={1.2}
        loopSpeedMs={1000}
      />);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screen}>
          {this.renderReactions()}
        </View>
        <Button style={styles.reactionButton} title='Random Reaction' onPress={this.animateReaction} />
      </View>);
  }
}