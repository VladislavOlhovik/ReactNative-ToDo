import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
    const [todos, setTodos] = useState([])
    const addTodo = (title) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: Date.now().toString(),
                title
            }
        ])
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(el => el.id!==id))
    }
    return (
        <View style={{height:'93%'}}>
            <Navbar title={'Todo APP!'}/>
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo}/>
                <FlatList
                    keyExtractor={(item => item.id)}
                    data={todos}
                    renderItem={({item}) => <Todo removeTodo={removeTodo} todo={item}/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        height:'100%',
    }
});
