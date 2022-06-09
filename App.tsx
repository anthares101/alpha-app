import React, {useEffect, useRef, useState} from 'react';
import {useFps} from 'react-fps';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';

const MESSAGE = 'Helloworld';

const App = () => {
  const [fpsCounter, setFpsCounter] = useState('');
  const {fps} = useFps(1);
  const wallpaperImage = require('./assets/wallpaper.jpg');
  const counter = useRef(0);

  useEffect(() => {
    if (fps[0]) {
      const hiddenInfo = hideInfo(encodedMessage[counter.current], fps[0]);
      setFpsCounter(hiddenInfo);
      counter.current = (counter.current + 1) % encodedMessage.length;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fps]);

  const hideInfo = (character: string, currentFps: number): string => {
    let roundedFps = Math.round(currentFps / 10) * 10;

    switch (character) {
      case '1': {
        roundedFps = roundedFps + 1;
        break;
      }
      case '2': {
        roundedFps = roundedFps - 1;
        break;
      }
    }

    return roundedFps.toString();
  };

  const encodeMessage = (message: string) => {
    const encodedMessage = message
      .split('')
      .map(char => {
        return char.charCodeAt(0).toString(2);
      })
      .join('2');

    return `2002${encodedMessage}2022`;
  };
  const encodedMessage = encodeMessage(MESSAGE);

  return (
    <View>
      <ImageBackground style={styles.stretch} source={wallpaperImage}>
        <Text style={styles.hiddenMessage}>FPS: {fpsCounter}</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  stretch: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  hiddenMessage: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    color: '#000000',
  },
});
