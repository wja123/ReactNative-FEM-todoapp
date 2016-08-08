import React, {
    Component
}
from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    View
}
from 'react-native';

import {
    styles
}
from './styles';

export class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [1, 2],
            newTodo: ''
        }
    }
    handleChange(value) {
        this.setState({
            newTodo: value
        });
    }
    handlePress(e) {
        const todos = this.state.todos.slice();
        todos.push(this.state.newTodo);
        console.log(todos);
        this.setState({
            todos: todos,
            newTodo: ''
        });
    }
    removeTodo(index) {
        const todos = this.state.todos;
        todos.splice(index, 1);
        this.setState({
            todos
        })
    }
    render() {
        return ( < View style = {
                styles.container
            } >
            < Text style = {
                styles.title
            } > To Do List < /Text>
        <View style={styles.form}>
          <TextInput style={styles.input} value={this.state.newTodo} onChangeText={this.handleChange.bind(this)}/ >
          <TouchableHighlight style={styles.addbutton} onPress={this.handlePress.bind(this)}><Text style={styles.addButtonText} >Add</Text ></TouchableHighlight>
        </View>
        {this.state.todos.map((todo, i) => 
          (<TouchableHighlight onPress={this.removeTodo.bind(this, i)} 
            key={i}><Text style={styles.listItem} >{todo}</Text ></TouchableHighlight>))}
      </View>
        )
    }
}