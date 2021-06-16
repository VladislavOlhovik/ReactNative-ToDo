import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";

export const Todo = ({todo, removeTodo}) => {

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={{width:'80%'}}>
                    {todo.title}
                </Text>
                <Button onPress={()=>removeTodo(todo.id)} title='DEL'/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#eee',
        marginBottom: 10,
        justifyContent: 'space-between'
    },
});