import React from "react";
import  {v4 as uuidv4} from "uuid";

import ToDoList from "./ToDoList";
import Header from "./Header";
import InputToDo from "./InputToDo";

class ToDoContainer extends React.Component{
    
    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup devEnv",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Dev website and add componets",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
    
    handleChange = (idx) => { 
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === idx) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
              
                return todo
            }),
        }));
    };

    handleDelItem = (idx) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== idx;
                })
            ]
        })
    };

    handleAddItem = (itemTitle) => {
        const newTodo = {
            id: uuidv4(),
            title: itemTitle,
            completed: false
        };

        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render(){
        return(
            <div>
                <Header />
                <InputToDo addItemEventHandler={this.handleAddItem}/>
                <ToDoList 
                    todos={this.state.todos} 
                    changeEventHandler={this.handleChange} 
                    delItemEventHandler={this.handleDelItem}/>
            </div>
            
        );
    };
}

export default ToDoContainer