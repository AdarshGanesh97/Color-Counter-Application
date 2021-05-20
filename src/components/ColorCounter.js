import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const ColorCounter = (props) => {
    return (
    <View>
        <Text>{props.color}</Text>
        <View style={styles.buttonTop}>
        <Button onPress={() =>{props.onIncrease()}} title={`Increase ${props.color}`} />
        </View>
        <View style={styles.buttonBottom}>
        <Button onPress={() =>{props.onDecrease()}} title={`Decrease ${props.color}`} />
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    buttonTop: {
        height: 40,
        width: 360    
    },

    buttonBottom: {
        height: 70,
        width: 360
    }
});

export default ColorCounter;