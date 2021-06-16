import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet, Alert} from "react-native";


export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Enter your Title, Please:)')
        }
    }

    const typing = (text) => {
        setValue(text)
    }

    return (
        <View style={styles.block}>
            <TextInput
                value={value}
                placeholder={'Enter your Title'}
                onChangeText={typing}
                style={styles.input}/>
            <Button onPress={pressHandler} title='ADD'/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '80%',
        fontSize: 20,
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
    }
});