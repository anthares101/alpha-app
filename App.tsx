import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet, ImageBackground} from 'react-native';
import RNPhotoManipulator from 'react-native-photo-manipulator';

const MESSAGE = 'Helloworld';

const App = () => {
  const [newImage, setNewImage] = useState('');
  const wallpaperImage = require('./assets/wallpaper.jpg');

  useEffect(() => {
    encodeText(MESSAGE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const encodeText = (text: string) => {
    var delay = 0;
    Array.from(text).forEach(character => {
      setTimeout(function () {
        processImage(character);
      }, delay);

      delay += 2000;
    });
    // Repeat the message again
    setTimeout(function () {
      encodeText(MESSAGE);
    }, delay);
  };

  const processImage = async (text: string) => {
    const texts = [
      {
        position: {x: 300, y: 300},
        text: text,
        textSize: 100,
        color: '#111111',
      },
    ];

    const newImagePath = await RNPhotoManipulator.printText(
      wallpaperImage,
      texts,
    );
    setNewImage(newImagePath);
  };

  return (
    <View>
      <ImageBackground style={styles.stretch} source={wallpaperImage}>
        {newImage ? (
          <Image
            style={styles.stretch}
            source={{
              uri: newImage,
            }}
          />
        ) : null}
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
});
