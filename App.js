import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ColorCounter from './src/components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
      <View style={styles.view}>
        <View style={styles.screen}>
          <Text style={styles.text}>Color Counter</Text>
            <ColorCounter onIncrease={() => setRed(red + COLOR_INCREMENT)} onDecrease={() => setRed(red - COLOR_INCREMENT)} color="Red" />
            <ColorCounter onIncrease={() => setGreen(green + COLOR_INCREMENT)} onDecrease={() => setGreen(green - COLOR_INCREMENT)} color="Green" />
            <ColorCounter onIncrease={() => setBlue(blue + COLOR_INCREMENT)} onDecrease={() => setBlue(blue - COLOR_INCREMENT)} color="Blue" />

            <View
                style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green},${blue})`,
                marginHorizontal: 100  
              }}
            />

        </View>
        </View>
    );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'lightblue'
  },

  screen: {
    marginVertical: 40
  },

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
    color: 'white'
  }
});

export default SquareScreen;