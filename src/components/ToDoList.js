import React from "react";
import ToDoItem from "./ToDoItem";

class ToDoList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.todos.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        todo={todo}
                        changeEventHandler={this.props.changeEventHandler}
                        delItemEventHandler={this.props.delItemEventHandler} />
                ))}
            </ul>
        );
    }
}

export default ToDoList;