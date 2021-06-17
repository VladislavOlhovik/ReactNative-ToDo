import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const List = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}