import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const Navbar = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
});