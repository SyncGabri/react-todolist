import React from "react";

class ToDoItem extends React.Component{

    render(){
        return(
            <li>
                <input
                    type="checkbox"
                    checked={this.props.todo.completed}
                    onChange={() => this.props.changeEventHandler(this.props.todo.id)}
                />
                <button
                    onClick={() => this.props.delItemEventHandler(this.props.todo.id)}>
                    Delete
                </button>
                {this.props.todo.title}
            </li>
        );
    }
}

export default ToDoItem