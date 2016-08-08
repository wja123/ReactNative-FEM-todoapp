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
            todos: [],
            newTodo: ''
        }
      }
    componentWillMount() {
      fetch('http://localhost:3000/todos', { 
        method: 'get',
        headers: {
        'Content-Type': "application/json" }})
      .then(res => res.json())
      .then(data =>
        {this.setState({ todos: data });}
      )
    }
    handleChange(value) {
        this.setState({
            newTodo: value
        });
    }
    handlePress(e) {
      fetch('http://localhost:3000/todos', { 
        method: 'post',
        body: JSON.stringify({
          name: this.state.newTodo
        }),
        headers: {
        'Content-Type': "application/json" }})
      .then(res => res.json())
      .then(data => {
        const todos = this.state.todos.slice();
        todos.push(data);
        this.setState({todos, newTodo: ''})
      });
    }
    removeTodo(index) {
      fetch(`http://localhost:3000/todos/${this.state.todos[index].id}`, { 
        method: 'delete',
        body: JSON.stringify({
          id: this.state.todos[index].id
        }),
        headers: {
        'Content-Type': "application/json" }})
      .then(data => {
        const todos = this.state.todos;
        todos.splice(index, 1);
        this.setState({ todos })
      });
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
            key={i}><Text style={styles.listItem} >{todo.name}</Text ></TouchableHighlight>))}
      </View>
        )
    }
}