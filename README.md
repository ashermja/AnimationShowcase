# Animation Showcase (Facebook live reactions demo)

Quick demo to showcase some of the animation features of React Native using the Animated Api. The demo emulated the reactions feature used on Facebook live.

## Getting Started

Download source open the project with Expo SDK 

### Prerequisites

You will need to have Expo SDK and an Android/ IOS device with expo installed. Alterntively you can use the IOS simulator 

### Declarative Usage
The main Component in this showcase is animate-reaction.tsx declared as below

```html
<AnimatedReaction animationComplete={animationComplete} reactionNo={uniqueId} />);
```

### Properties
| Prop | Description | Default |
|---|---|---|
|**`animationComplete`**|A function that gets executed with the animation is complete. |*None*|
|**`reactionNo`**|A unique value of the AnimatedReaction. |`0`|
|**`minPositionY`**|The minimum vertical wobble the a reaction will have (pixels). |`0`|
|**`maxPositionY`**|The maximum vertical wobble the a reaction will have(pixels). |`40`|
|**`durationMs`**|How long the animation will run (milliseconds). |`5000`|
|**`initialScale`**|The intial scale of the reaction |`1`|
|**`minScale`**|The minimum scale that the reaction will shrink to. |`0.9`|
|**`maxScale`**|The maximum scale that the reaction will shrink to. |`1.2`|
|**`loopSpeedMs`**|Speed a single loop will execute, effects the wobble and scale speeds |`1000`|

## Authors

* **Marc Asher** - [ashermja](https://github.com/ashermja)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
