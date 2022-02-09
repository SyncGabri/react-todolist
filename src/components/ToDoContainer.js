import React from "react";
import  {v4 as uuidv4} from "uuid";

import ToDoList from "./ToDoList";
import Header from "./Header";
import InputToDo from "./InputToDo";

class ToDoContainer extends React.Component{
    
    state = {
        todos: []
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

    handleUpdateItem = (newTitle, idx) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === idx)
                    todo.title = newTitle;
                
                return todo;
            })
        });
    }


    componentDidMount(){
        const tmp       = localStorage.getItem("todos");
        const toLoad    = JSON.parse(tmp);
        
        if(toLoad)
            this.setState({todos: toLoad});
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.todos !== this.state.todos){
            const tmp = JSON.stringify(this.state.todos);
            localStorage.setItem("todos", tmp);
        }
    }

    render(){
        return(
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputToDo addItemEventHandler={this.handleAddItem}/>
                    <ToDoList 
                        todos={this.state.todos} 
                        changeEventHandler={this.handleChange} 
                        delItemEventHandler={this.handleDelItem}
                        updateItemEventHandler={this.handleUpdateItem}
                        />
                </div>
            </div>
        );
    };
}

export default ToDoContainer;